const express = require('express');
const {
  getOrCreateConversation,
  getOrCreateConversationByUser,
  sendMessage,
  getUserConversations,
  getConversationMessages
} = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// All chat routes require authentication
router.use(authMiddleware);

// Get or create conversation for a property
router.get('/conversations/property/:propertyId', getOrCreateConversation);

// Get or create conversation with a specific user (seller)
router.post('/conversations/user/:userId', getOrCreateConversationByUser);

// Get all conversations for current user
router.get('/conversations', getUserConversations);

// Get messages for a conversation
router.get('/conversations/:conversationId/messages', getConversationMessages);

// Send a message
router.post('/conversations/:conversationId/messages', sendMessage);

module.exports = router;
