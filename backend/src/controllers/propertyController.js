const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const prisma = require('../utils/db')


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
    const { title, description, price, address, images } = req.body

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
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
    const { title, description, price, address } = req.body

    const property = await prisma.property.findUnique({
      where: { id }
    })

    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    if (property.ownerId !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this property' })
    }

    const updatedProperty = await prisma.property.update({
      where: { id },
      data: {
        title,
        description,
        price,
        address: address ? {
          upsert: {
            create: {
              street: address.street,
              city: address.city,
              state: address.state,
              zipCode: address.zipCode,
              country: address.country
            },
            update: {
              street: address.street,
              city: address.city,
              state: address.state,
              zipCode: address.zipCode,
              country: address.country
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

    await prisma.property.delete({
      where: { id }
    })

    res.status(200).json({ message: 'Property deleted successfully' })
  } catch (error) {
    console.error('Delete property error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  signup,
  login,
  getProfile,
  googleCallback,
  googleFailure,
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty
}