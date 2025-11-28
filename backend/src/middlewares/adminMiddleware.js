// Admin authentication middleware
const bcrypt = require('bcryptjs');
const prisma = require('../utils/db');

const adminMiddleware = async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password'];
    
    if (!adminPassword) {
      return res.status(401).json({ 
        message: 'Admin password is required',
        error: 'UNAUTHORIZED' 
      });
    }
    
    // Get admin password from database
    let adminConfig = await prisma.adminConfig.findUnique({
      where: { key: 'admin_password' }
    });
    
    // If no password in database, create default one
    if (!adminConfig) {
      const defaultPassword = process.env.ADMIN_PASSWORD || 'admin123';
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);
      
      adminConfig = await prisma.adminConfig.create({
        data: {
          key: 'admin_password',
          value: hashedPassword
        }
      });
    }
    
    // Compare provided password with hashed password
    const isValid = await bcrypt.compare(adminPassword, adminConfig.value);
    
    if (!isValid) {
      return res.status(403).json({ 
        message: 'Invalid admin password',
        error: 'FORBIDDEN' 
      });
    }
    
    // Password is valid, proceed to next middleware/controller
    next();
  } catch (error) {
    console.error('Admin authentication error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
};

module.exports = adminMiddleware;
