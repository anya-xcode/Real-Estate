const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const prisma = require('../utils/db')

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
  try {
   
    let user = await prisma.user.findUnique({
      where: { googleId: profile.id }
    })

    if (user) {
      return done(null, user)
    }


    user = await prisma.user.findUnique({
      where: { email: profile.emails[0].value }
    })

    if (user) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          googleId: profile.id,
          provider: 'google',
          firstName: profile.name.givenName,
          lastName: profile.name.familyName
        }
      });
      return done(null, user)
    }

    user = await prisma.user.create({
      data: {
        googleId: profile.id,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        provider: 'google',
        username: profile.emails[0].value.split('@')[0]
      }
    })

    return done(null, user)
  } catch (error) {
    console.error('Google OAuth error:', error)
    return done(error, null)
  }
}))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        provider: true
      }
    });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
})

module.exports = passport
