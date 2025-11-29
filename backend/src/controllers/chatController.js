const prisma = require('../utils/db');

// Get or create a conversation between buyer and seller for a property
const getOrCreateConversation = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const currentUserId = req.user.id;

    // Get property to find the seller
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: { owner: true }
    });

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (!property.ownerId) {
      return res.status(400).json({ message: 'Property has no owner' });
    }

    const sellerId = property.ownerId;

    // Determine if current user is seller or buyer
    const isSeller = currentUserId === sellerId;
    
    // If seller is trying to open chat on their own property
    // they need to view existing conversations with buyers
    if (isSeller) {
      // Find any conversation for this property where user is the seller
      let conversation = await prisma.conversation.findFirst({
        where: {
          propertyId,
          sellerId: currentUserId
        },
        include: {
          property: {
            include: {
              images: { take: 1 }
            }
          },
          buyer: {
            select: {
              id: true,
              username: true,
              email: true,
              firstName: true,
              lastName: true
            }
          },
          seller: {
            select: {
              id: true,
              username: true,
              email: true,
              firstName: true,
              lastName: true
            }
          },
          messages: {
            orderBy: { createdAt: 'asc' },
            include: {
              sender: {
                select: {
                  id: true,
                  username: true,
                  email: true,
                  firstName: true,
                  lastName: true
                }
              }
            }
          }
        },
        orderBy: {
          lastMessageAt: 'desc'
        }
      });

      if (!conversation) {
        return res.status(404).json({ 
          message: 'No conversations yet for this property',
          noConversations: true 
        });
      }

      return res.status(200).json({ conversation });
    }

    // Current user is a buyer
    const buyerId = currentUserId;

    // Don't allow owner to chat with themselves
    if (buyerId === sellerId) {
      return res.status(400).json({ message: 'Cannot chat with yourself' });
    }

    // Find or create conversation
    let conversation = await prisma.conversation.findFirst({
      where: {
        propertyId,
        buyerId,
        sellerId
      },
      include: {
        property: {
          include: {
            images: { take: 1 }
          }
        },
        buyer: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        seller: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        messages: {
          orderBy: { createdAt: 'asc' },
          include: {
            sender: {
              select: {
                id: true,
                username: true,
                email: true,
                firstName: true,
                lastName: true
              }
            }
          }
        }
      }
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          propertyId,
          buyerId,
          sellerId
        },
        include: {
          property: {
            include: {
              images: { take: 1 }
            }
          },
          buyer: {
            select: {
              id: true,
              username: true,
              email: true,
              firstName: true,
              lastName: true
            }
          },
          seller: {
            select: {
              id: true,
              username: true,
              email: true,
              firstName: true,
              lastName: true
            }
          },
          messages: {
            orderBy: { createdAt: 'asc' },
            include: {
              sender: {
                select: {
                  id: true,
                  username: true,
                  email: true,
                  firstName: true,
                  lastName: true
                }
              }
            }
          }
        }
      });
    }

    res.status(200).json({ conversation });
  } catch (error) {
    console.error('Get or create conversation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Send a message in a conversation
const sendMessage = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const { text } = req.body;
    const senderId = req.user.id;

    if (!text || !text.trim()) {
      return res.status(400).json({ message: 'Message text is required' });
    }

    // Verify user is part of this conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    if (conversation.buyerId !== senderId && conversation.sellerId !== senderId) {
      return res.status(403).json({ message: 'Not authorized to send messages in this conversation' });
    }

    // Create message
    const message = await prisma.message.create({
      data: {
        conversationId,
        senderId,
        text: text.trim()
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    // Update conversation's lastMessageAt
    await prisma.conversation.update({
      where: { id: conversationId },
      data: { lastMessageAt: new Date() }
    });

    res.status(201).json({ message });
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all conversations for the current user
const getUserConversations = async (req, res) => {
  try {
    const userId = req.user.id;

    const conversations = await prisma.conversation.findMany({
      where: {
        OR: [
          { buyerId: userId },
          { sellerId: userId }
        ]
      },
      include: {
        property: {
          include: {
            images: { take: 1 }
          }
        },
        buyer: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        seller: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          include: {
            sender: {
              select: {
                id: true,
                username: true
              }
            }
          }
        }
      },
      orderBy: {
        lastMessageAt: 'desc'
      }
    });

    // Group conversations by the other user (remove duplicates with same user)
    const uniqueConversations = [];
    const seenUsers = new Set();

    for (const conv of conversations) {
      // Determine who the "other user" is
      const otherUserId = conv.buyerId === userId ? conv.sellerId : conv.buyerId;
      
      // Only include the first (most recent) conversation with each unique user
      if (!seenUsers.has(otherUserId)) {
        seenUsers.add(otherUserId);
        uniqueConversations.push(conv);
      }
    }

    res.status(200).json({ conversations: uniqueConversations });
  } catch (error) {
    console.error('Get user conversations error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get messages for a conversation
const getConversationMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const userId = req.user.id;

    // Verify user is part of this conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    if (conversation.buyerId !== userId && conversation.sellerId !== userId) {
      return res.status(403).json({ message: 'Not authorized to view this conversation' });
    }

    const messages = await prisma.message.findMany({
      where: { conversationId },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    // Mark messages as read if they're not from the current user
    await prisma.message.updateMany({
      where: {
        conversationId,
        senderId: { not: userId },
        isRead: false
      },
      data: { isRead: true }
    });

    res.status(200).json({ messages });
  } catch (error) {
    console.error('Get conversation messages error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get or create a conversation with a specific user (seller)
const getOrCreateConversationByUser = async (req, res) => {
  try {
    const { userId } = req.params; // The seller's user ID
    const currentUserId = req.user.id;
    const { propertyId } = req.body; // Optional property context

    // Don't allow users to message themselves
    if (currentUserId === userId) {
      return res.status(400).json({ message: 'Cannot create conversation with yourself' });
    }

    // Check if conversation already exists between these two users
    // Find the MOST RECENT conversation (same logic as getUserConversations)
    let conversation = await prisma.conversation.findFirst({
      where: {
        OR: [
          { buyerId: currentUserId, sellerId: userId },
          { buyerId: userId, sellerId: currentUserId }
        ]
      },
      include: {
        property: {
          include: {
            images: { take: 1 }
          }
        },
        buyer: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        seller: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      },
      orderBy: {
        lastMessageAt: 'desc'  // Get the most recent conversation
      }
    });

    // If no conversation exists, create one
    if (!conversation) {
      // Determine who is buyer and who is seller
      const buyerId = currentUserId;
      const sellerId = userId;

      // If propertyId is provided, use it; otherwise, find a property owned by the seller
      let propertyIdToUse = propertyId;
      if (!propertyIdToUse) {
        const sellerProperty = await prisma.property.findFirst({
          where: { ownerId: sellerId }
        });
        propertyIdToUse = sellerProperty?.id;
      }

      conversation = await prisma.conversation.create({
        data: {
          buyerId,
          sellerId,
          propertyId: propertyIdToUse
        },
        include: {
          property: {
            include: {
              images: { take: 1 }
            }
          },
          buyer: {
            select: {
              id: true,
              username: true,
              email: true,
              firstName: true,
              lastName: true
            }
          },
          seller: {
            select: {
              id: true,
              username: true,
              email: true,
              firstName: true,
              lastName: true
            }
          },
          messages: true
        }
      });
    }

    res.status(200).json({ conversation });
  } catch (error) {
    console.error('Get or create conversation by user error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getOrCreateConversation,
  getOrCreateConversationByUser,
  sendMessage,
  getUserConversations,
  getConversationMessages
};
