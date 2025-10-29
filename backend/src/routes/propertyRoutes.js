const express = require('express');
const { body } = require('express-validator');
const passport = require('passport');
const { signup, login, getProfile, googleCallback, googleFailure } = require('../controllers/propertyController');
const authMiddleware = require('../middlewares/authMiddleware');

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


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/api/auth/google/failure' }),
  googleCallback
);
router.get('/google/failure', googleFailure);

module.exports = router
