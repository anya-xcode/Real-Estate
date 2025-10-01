const express = require('express');
const { body } = require('express-validator');
const { signup, login, getProfile } = require('../controllers/propertyController');
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
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];


router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);
router.get('/profile', authMiddleware, getProfile);

module.exports = router
