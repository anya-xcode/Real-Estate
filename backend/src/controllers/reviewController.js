const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Submit a new review
exports.submitReview = async (req, res) => {
  try {
    const { name, role, rating, text, image } = req.body;

    // Validate required fields
    if (!name || !role || !text) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, role, and review text are required' 
      });
    }

    // Validate rating
    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Rating must be between 1 and 5' 
      });
    }

    // Create review with isApproved set to false (pending admin approval)
    const review = await prisma.review.create({
      data: {
        name,
        role,
        rating: rating || 5,
        text,
        image: image || null,
        isApproved: false
      }
    });

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully! It will be visible after admin approval.',
      review
    });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit review',
      error: error.message
    });
  }
};

// Get all approved reviews (for public display)
exports.getApprovedReviews = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 3;

    const reviews = await prisma.review.findMany({
      where: {
        isApproved: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit
    });

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reviews',
      error: error.message
    });
  }
};

// Get all reviews (for admin)
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews
    });
  } catch (error) {
    console.error('Error fetching all reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reviews',
      error: error.message
    });
  }
};

// Approve a review (admin only)
exports.approveReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await prisma.review.update({
      where: { id },
      data: { isApproved: true }
    });

    res.status(200).json({
      success: true,
      message: 'Review approved successfully',
      review
    });
  } catch (error) {
    console.error('Error approving review:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to approve review',
      error: error.message
    });
  }
};

// Delete a review (admin only)
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.review.delete({
      where: { id }
    });

    res.status(200).json({
      success: true,
      message: 'Review deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete review',
      error: error.message
    });
  }
};
