const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const prisma = require('../utils/db')
const https = require('https')


const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      })
    }

    const { username, email, password } = req.body

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
        ]
      }
    })

    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this email or username already exists' 
      })
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true
      }
    })

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User created successfully',
      user,
      token
    })

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }


    const { identifier, password } = req.body

    let user;
    if (identifier.includes('@')) {
      user = await prisma.user.findUnique({ where: { email: identifier } })
    } else {
      user = await prisma.user.findUnique({ where: { username: identifier } })
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )


    const userData = {
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt
    }

    res.status(200).json({
      message: 'Login successful',
      user: userData,
      token
    })

  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        location: true,
        bio: true,
        avatar: true,
        createdAt: true,
        updatedAt: true
      }
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ user })
  } catch (error) {
    console.error('Get profile error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, phone, location, bio, avatar } = req.body
    
    console.log('Updating profile for user:', req.user.id)
    console.log('Update data:', { firstName, lastName, phone, location, bio, avatar: avatar ? 'present' : 'null' })

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        firstName,
        lastName,
        phone,
        location,
        bio,
        avatar
      },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        location: true,
        bio: true,
        avatar: true,
        createdAt: true,
        updatedAt: true
      }
    })

    console.log('Profile updated successfully')
    res.status(200).json({ 
      message: 'Profile updated successfully',
      user: updatedUser 
    })
  } catch (error) {
    console.error('Update profile error:', error)
    console.error('Error details:', error.message)
    res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Current password and new password are required' })
    }

    // Get user with password
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }
    })

    if (!user || !user.password) {
      return res.status(400).json({ message: 'Cannot change password for OAuth users' })
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Current password is incorrect' })
    }

    // Hash new password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds)

    // Update password
    await prisma.user.update({
      where: { id: req.user.id },
      data: { password: hashedPassword }
    })

    res.status(200).json({ message: 'Password changed successfully' })
  } catch (error) {
    console.error('Change password error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id
    const { password } = req.body

    // Get user
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // If user has a password (not OAuth), verify it
    if (user.password) {
      if (!password) {
        return res.status(400).json({ message: 'Password is required to delete account' })
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' })
      }
    }

    // Delete user's data in transaction
    await prisma.$transaction(async (tx) => {
      // Delete user's inquiries
      await tx.inquiry.deleteMany({
        where: { userId: userId }
      })

      // Delete user's favorites
      await tx.favorite.deleteMany({
        where: { userId: userId }
      })

      // Delete conversations where user is buyer or seller
      // This will cascade delete messages automatically
      await tx.conversation.deleteMany({
        where: { 
          OR: [
            { buyerId: userId },
            { sellerId: userId }
          ]
        }
      })

      // Delete user's properties (this will cascade delete related data)
      await tx.property.deleteMany({
        where: { ownerId: userId }
      })

      // Finally, delete the user
      await tx.user.delete({
        where: { id: userId }
      })
    })

    res.status(200).json({ message: 'Account deleted successfully' })
  } catch (error) {
    console.error('Delete account error:', error)
    res.status(500).json({ message: 'Failed to delete account' })
  }
}

const googleCallback = async (req, res) => {
  try {
    console.log('[googleCallback] Called');
    console.log('[googleCallback] req.user:', req.user);
    
    if (!req.user) {
      console.error('[googleCallback] No user found in request');
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
      return res.redirect(`${frontendUrl}/auth/callback?error=no_user`)
    }
    
    const user = req.user;
    
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    console.log('[googleCallback] Token generated:', token.substring(0, 20) + '...');
  
    const userData = {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      provider: user.provider,
      createdAt: user.createdAt
    }

    console.log('[googleCallback] Redirecting to frontend with user data');
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
    res.redirect(`${frontendUrl}/auth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`)
    
  } catch (error) {
    console.error('Google OAuth callback error:', error)
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
    res.redirect(`${frontendUrl}/auth/callback?error=${encodeURIComponent(error.message)}`)
  }
}

const googleFailure = (req, res) => {
  console.error('[googleFailure] Google OAuth failed');
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
  res.redirect(`${frontendUrl}/auth/callback?error=authentication_failed`)
}

// Property CRUD Controllers
const getAllProperties = async (req, res) => {
  try {
    // Get query parameters
    const limit = req.query.limit ? parseInt(req.query.limit) : undefined
    const sort = req.query.sort || 'createdAt'
    const order = req.query.order || 'desc'

    const queryOptions = {
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        address: true,
        images: true
      },
      orderBy: {
        [sort]: order
      }
    }

    // Add limit if provided
    if (limit) {
      queryOptions.take = limit
    }

    const properties = await prisma.property.findMany(queryOptions)

    res.status(200).json({ properties })
  } catch (error) {
    console.error('Get properties error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params

    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        address: true,
        images: true,
        features: {
          include: {
            feature: true
          }
        }
      }
    })

    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    res.status(200).json({ property })
  } catch (error) {
    console.error('Get property error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const createProperty = async (req, res) => {
  try {
    const { title, description, price, propertyType, address, images } = req.body

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
        propertyType,
        ownerId: req.user.id,
        address: address ? {
          create: {
            street: address.street,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode,
            country: address.country
          }
        } : undefined,
        images: images ? {
          create: images.map((img, index) => ({
            url: img.url,
            order: index,
            isPrimary: index === 0
          }))
        } : undefined
      },
      include: {
        address: true,
        images: true,
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    })

    res.status(201).json({
      message: 'Property created successfully',
      property
    })
  } catch (error) {
    console.error('Create property error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, price, propertyType, address, images } = req.body

    const property = await prisma.property.findUnique({
      where: { id }
    })

    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    if (property.ownerId !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this property' })
    }

    // Update property with new data
    const updatedProperty = await prisma.property.update({
      where: { id },
      data: {
        title,
        description,
        price,
        propertyType,
        address: address ? {
          upsert: {
            create: {
              street: address.street,
              city: address.city,
              state: address.state,
              zipCode: address.zipCode,
              country: address.country || 'USA'
            },
            update: {
              street: address.street,
              city: address.city,
              state: address.state,
              zipCode: address.zipCode,
              country: address.country || 'USA'
            }
          }
        } : undefined
      },
      include: {
        address: true,
        images: true,
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    })

    // Update images if provided
    if (images && Array.isArray(images) && images.length > 0) {
      // Delete old images
      await prisma.propertyImage.deleteMany({
        where: { propertyId: id }
      })

      // Create new images
      await prisma.propertyImage.createMany({
        data: images.map((img, index) => ({
          propertyId: id,
          url: img.url,
          order: img.order || index,
          isPrimary: img.isPrimary || index === 0
        }))
      })

      // Fetch updated property with new images
      const finalProperty = await prisma.property.findUnique({
        where: { id },
        include: {
          address: true,
          images: true,
          owner: {
            select: {
              id: true,
              username: true,
              email: true
            }
          }
        }
      })

      return res.status(200).json({
        message: 'Property updated successfully',
        property: finalProperty
      })
    }

    res.status(200).json({
      message: 'Property updated successfully',
      property: updatedProperty
    })
  } catch (error) {
    console.error('Update property error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params

    const property = await prisma.property.findUnique({
      where: { id }
    })

    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    if (property.ownerId !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this property' })
    }

    // Delete related records first to avoid foreign key constraint errors
    // Delete in order: messages -> conversations -> favorites -> inquiries -> features -> images -> address -> property
    
    // 1. Delete all messages in conversations related to this property
    await prisma.message.deleteMany({
      where: {
        conversation: {
          propertyId: id
        }
      }
    })

    // 2. Delete all conversations related to this property
    await prisma.conversation.deleteMany({
      where: { propertyId: id }
    })

    // 3. Delete all favorites related to this property
    await prisma.favorite.deleteMany({
      where: { propertyId: id }
    })

    // 4. Delete all inquiries related to this property
    await prisma.inquiry.deleteMany({
      where: { propertyId: id }
    })

    // 5. Delete all property features
    await prisma.propertyFeature.deleteMany({
      where: { propertyId: id }
    })

    // 6. Delete all property images
    await prisma.propertyImage.deleteMany({
      where: { propertyId: id }
    })

    // 7. Delete address
    await prisma.address.deleteMany({
      where: { propertyId: id }
    })

    // 8. Finally delete the property
    await prisma.property.delete({
      where: { id }
    })

    res.status(200).json({ message: 'Property deleted successfully' })
  } catch (error) {
    console.error('Delete property error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Admin Controllers
const adminGetAllProperties = async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        address: true,
        images: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    res.status(200).json({ properties })
  } catch (error) {
    console.error('Admin get properties error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const adminApproveProperty = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    // Validate status
    if (!['approved', 'denied', 'pending'].includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status. Must be approved, denied, or pending' 
      })
    }

    const property = await prisma.property.findUnique({
      where: { id }
    })

    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    const updatedProperty = await prisma.property.update({
      where: { id },
      data: {
        verificationStatus: status
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        address: true,
        images: true
      }
    })

    res.status(200).json({ 
      message: `Property ${status} successfully`,
      property: updatedProperty 
    })
  } catch (error) {
    console.error('Admin approve property error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const adminDeleteProperty = async (req, res) => {
  try {
    const { id } = req.params

    const property = await prisma.property.findUnique({
      where: { id }
    })

    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    // Delete related records first to avoid foreign key constraint errors
    await prisma.$transaction([
      // Delete property features
      prisma.propertyFeature.deleteMany({
        where: { propertyId: id }
      }),
      // Delete property images
      prisma.propertyImage.deleteMany({
        where: { propertyId: id }
      }),
      // Delete inquiries
      prisma.inquiry.deleteMany({
        where: { propertyId: id }
      }),
      // Delete favorites
      prisma.favorite.deleteMany({
        where: { propertyId: id }
      }),
      // Delete address
      prisma.address.deleteMany({
        where: { propertyId: id }
      }),
      // Finally delete the property
      prisma.property.delete({
        where: { id }
      })
    ])

    res.status(200).json({ message: 'Property deleted successfully' })
  } catch (error) {
    console.error('Admin delete property error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const adminChangePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        message: 'Current password and new password are required' 
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ 
        message: 'New password must be at least 6 characters long' 
      });
    }

    // Get current admin password from database
    let adminConfig = await prisma.adminSettings.findUnique({
      where: { key: 'admin_password' }
    });

    // If no password exists, create with default
    if (!adminConfig) {
      const defaultPassword = process.env.ADMIN_PASSWORD || 'admin123';
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);
      
      adminConfig = await prisma.adminSettings.create({
        data: {
          key: 'admin_password',
          value: hashedPassword
        }
      });
    }

    // Verify current password
    const isValid = await bcrypt.compare(currentPassword, adminConfig.value);
    
    if (!isValid) {
      return res.status(403).json({ 
        message: 'Current password is incorrect' 
      });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update password in database
    await prisma.adminSettings.update({
      where: { key: 'admin_password' },
      data: { value: hashedNewPassword }
    });

    res.status(200).json({ 
      message: 'Admin password changed successfully' 
    });
  } catch (error) {
    console.error('Admin change password error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get user's favorite properties
const getUserFavorites = async (req, res) => {
  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId: req.user.id },
      include: {
        property: {
          include: {
            images: {
              orderBy: { order: 'asc' },
              take: 1
            },
            address: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    res.status(200).json({ favorites })
  } catch (error) {
    console.error('Get favorites error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Remove favorite
const removeFavorite = async (req, res) => {
  try {
    const { id } = req.params

    const favorite = await prisma.favorite.findUnique({
      where: { id }
    })

    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' })
    }

    if (favorite.userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' })
    }

    await prisma.favorite.delete({
      where: { id }
    })

    res.status(200).json({ message: 'Favorite removed successfully' })
  } catch (error) {
    console.error('Remove favorite error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Add favorite
const addFavorite = async (req, res) => {
  try {
    const { propertyId } = req.body

    if (!propertyId) {
      return res.status(400).json({ message: 'Property ID is required' })
    }

    // Check if already favorited
    const existing = await prisma.favorite.findUnique({
      where: {
        userId_propertyId: {
          userId: req.user.id,
          propertyId: propertyId
        }
      }
    })

    if (existing) {
      return res.status(200).json({ favorite: existing, message: 'Already favorited' })
    }

    // Create favorite
    const favorite = await prisma.favorite.create({
      data: {
        userId: req.user.id,
        propertyId: propertyId
      }
    })

    res.status(201).json({ favorite, message: 'Property added to favorites' })
  } catch (error) {
    console.error('Add favorite error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get user activity
const getUserActivity = async (req, res) => {
  try {
    // Get recent favorites
    const recentFavorites = await prisma.favorite.findMany({
      where: { userId: req.user.id },
      include: {
        property: {
          select: {
            title: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 10
    })

    // Get recent messages
    const recentMessages = await prisma.message.findMany({
      where: { senderId: req.user.id },
      include: {
        conversation: {
          include: {
            property: {
              select: {
                title: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 10
    })

    // Combine and format activity
    const activity = [
      ...recentFavorites.map(fav => ({
        action: 'favorite_added',
        propertyTitle: fav.property.title,
        createdAt: fav.createdAt
      })),
      ...recentMessages.map(msg => ({
        action: 'message_sent',
        propertyTitle: msg.conversation.property.title,
        createdAt: msg.createdAt
      }))
    ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 20)

    res.status(200).json({ activity })
  } catch (error) {
    console.error('Get activity error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get user statistics
const getUserStats = async (req, res) => {
  try {
    const userId = req.user.id

    // Count inquiries
    const inquiriesCount = await prisma.inquiry.count({
      where: { userId: userId }
    })

    // Count conversations (as a proxy for property views/interactions)
    const conversationsCount = await prisma.conversation.count({
      where: {
        OR: [
          { buyerId: userId },
          { sellerId: userId }
        ]
      }
    })

    res.status(200).json({
      stats: {
        inquiries: inquiriesCount,
        propertyViews: 0, // This would require tracking views in a separate table
        conversations: conversationsCount
      }
    })
  } catch (error) {
    console.error('Get user stats error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get nearby places using Google Places API
const getNearbyPlaces = async (req, res) => {
  try {
    const { lat, lng, type } = req.body

    if (!lat || !lng || !type) {
      return res.status(400).json({ 
        message: 'Missing required parameters: lat, lng, type' 
      })
    }

    const GOOGLE_MAPS_API_KEY = process.env.VITE_GOOGLE_MAPS_API_KEY
    
    // Call Google Places Nearby Search API using https module
    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=50000&type=${type}&key=${GOOGLE_MAPS_API_KEY}`

    // Use https module to make request
    const data = await new Promise((resolve, reject) => {
      https.get(placesUrl, (response) => {
        let data = ''
        response.on('data', (chunk) => {
          data += chunk
        })
        response.on('end', () => {
          try {
            resolve(JSON.parse(data))
          } catch (e) {
            reject(e)
          }
        })
      }).on('error', (err) => {
        reject(err)
      })
    })

    if (data.status === 'REQUEST_DENIED') {
      return res.status(500).json({ 
        message: 'Google API access denied',
        error: data.error_message 
      })
    }

    if (data.status !== 'OK' || !data.results || data.results.length === 0) {
      return res.json({ 
        name: 'Not found', 
        distance: 'N/A', 
        address: '' 
      })
    }

    // Get the closest place (first result is usually closest)
    const place = data.results[0]
    
    // Calculate distance using Haversine formula
    const placeLat = place.geometry.location.lat
    const placeLng = place.geometry.location.lng
    
    const R = 3959 // Earth's radius in miles
    const dLat = (placeLat - lat) * Math.PI / 180
    const dLng = (placeLng - lng) * Math.PI / 180
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat * Math.PI / 180) * Math.cos(placeLat * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c
    
    res.json({
      name: place.name,
      distance: `${distance.toFixed(1)} miles`,
      address: place.vicinity || ''
    })

  } catch (error) {
    console.error('Error fetching nearby places:', error)
    res.status(500).json({ 
      message: 'Error fetching nearby places',
      error: error.message 
    })
  }
}

module.exports = {
  signup,
  login,
  getProfile,
  updateProfile,
  changePassword,
  deleteAccount,
  googleCallback,
  googleFailure,
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  getUserFavorites,
  addFavorite,
  removeFavorite,
  getUserActivity,
  getUserStats,
  getNearbyPlaces,
  adminGetAllProperties,
  adminApproveProperty,
  adminDeleteProperty,
  adminChangePassword
}
