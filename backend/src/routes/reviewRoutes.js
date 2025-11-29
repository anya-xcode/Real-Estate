const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Public routes
router.post('/reviews', reviewController.submitReview);
router.get('/reviews', reviewController.getApprovedReviews);

// Admin routes
router.get('/reviews/all', adminMiddleware, reviewController.getAllReviews);
router.patch('/reviews/:id/approve', adminMiddleware, reviewController.approveReview);
router.delete('/reviews/:id', adminMiddleware, reviewController.deleteReview);

module.exports = router;
