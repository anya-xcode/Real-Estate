const express = require('express');
const { body } = require('express-validator');
const passport = require('passport');
const { 
  signup, 
  login, 
  getProfile,
  updateProfile,
  changePassword,
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
  adminGetAllProperties,
  adminApproveProperty,
  adminDeleteProperty,
  adminChangePassword
} = require('../controllers/propertyController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const { upload } = require('../config/cloudinary');

const router = express.Router();


const validateSignup = [
  body('username')
    .isLength({ min: 3, max: 20 })
    .withMessage('Username must be between 3 and 20 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers and underscores'),
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter and one number'),
];  

const validateLogin = [

  body('identifier')
    .notEmpty()
    .withMessage('Email or username is required')
    .bail()
    .custom((value) => {
    
      if (value.includes('@')) {
      
        const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
        if (!re.test(value)) {
          throw new Error('Invalid email address')
        }
      }
      return true
    }),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];


router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
router.post('/change-password', authMiddleware, changePassword);
router.get('/favorites', authMiddleware, getUserFavorites);
router.post('/favorites', authMiddleware, addFavorite);
router.delete('/favorites/:id', authMiddleware, removeFavorite);
router.get('/activity', authMiddleware, getUserActivity);


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  googleCallback
);
router.get('/google/failure', googleFailure);

// Image Upload Route
router.post('/upload-images', authMiddleware, upload.array('images', 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No images uploaded' });
    }

    const imageUrls = req.files.map((file, index) => ({
      url: file.path, // Cloudinary URL
      order: index,
      isPrimary: index === 0
    }));

    res.status(200).json({
      message: 'Images uploaded successfully',
      images: imageUrls
    });
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({ message: 'Failed to upload images' });
  }
});

// Property Routes
router.get('/properties', getAllProperties);
router.get('/properties/:id', getPropertyById);
router.post('/properties', authMiddleware, createProperty);
router.put('/properties/:id', authMiddleware, updateProperty);
router.delete('/properties/:id', authMiddleware, deleteProperty);

// Admin Routes
router.get('/admin/properties', adminMiddleware, adminGetAllProperties);
router.patch('/admin/properties/:id/status', adminMiddleware, adminApproveProperty);
router.delete('/admin/properties/:id', adminMiddleware, adminDeleteProperty);
router.post('/admin/change-password', adminMiddleware, adminChangePassword);

module.exports = router
