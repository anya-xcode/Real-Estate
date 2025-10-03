# Real Estate Backend API

This is the backend API for the Real Estate listing platform with authentication functionality.

## Features

- User registration (signup) with username, email, and password
- User login with email and password
- Google OAuth authentication
- JWT-based authentication
- Password hashing with bcrypt
- Input validation
- Protected routes with middleware

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# MySQL Database
DATABASE_URL="mysql://username:password@localhost:3306/real_estate_db"

# JWT Secret (generate a strong secret key)
JWT_SECRET="your-super-secret-jwt-key-here"

# Server Port
PORT=5000

# Frontend URL (for OAuth redirects)
FRONTEND_URL="http://localhost:3000"

# Google OAuth Configuration
GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GOOGLE_CALLBACK_URL="http://localhost:5000/api/auth/google/callback"

# Session Secret
SESSION_SECRET="your-session-secret-key"
```

### 3. Google OAuth Setup

1. **Go to Google Cloud Console:**

   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google+ API:**

   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it

3. **Create OAuth 2.0 Credentials:**

   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:5000/api/auth/google/callback` (development)
     - `https://yourdomain.com/api/auth/google/callback` (production)

4. **Copy the credentials:**
   - Copy the Client ID and Client Secret
   - Add them to your `.env` file

### 4. MySQL Database Setup

1. **Install MySQL:**

   - Download and install MySQL from [mysql.com](https://dev.mysql.com/downloads/)
   - Or use a package manager like Homebrew: `brew install mysql`

2. **Start MySQL service:**

   ```bash
   # On macOS with Homebrew
   brew services start mysql

   # On Linux
   sudo systemctl start mysql

   # On Windows
   net start mysql
   ```

3. **Create database:**

   ```sql
   mysql -u root -p
   CREATE DATABASE real_estate_db;
   ```

4. **Update the DATABASE_URL in your .env file** with your MySQL credentials

5. **Run Prisma migrations:**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

### 5. Start the Server

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

## API Endpoints

### Authentication Routes

#### POST /api/auth/signup

Register a new user.

**Request Body:**

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "Password123"
}
```

**Response:**

```json
{
  "message": "User created successfully",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt_token_here"
}
```

#### POST /api/auth/login

Login with email and password.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt_token_here"
}
```

#### GET /api/auth/profile

Get current user profile (requires authentication).

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response:**

```json
{
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Google OAuth Routes

#### GET /api/auth/google

Initiate Google OAuth login.

**Response:** Redirects to Google OAuth consent screen.

#### GET /api/auth/google/callback

Google OAuth callback (handled automatically).

**Response:** Redirects to frontend with JWT token and user data.

#### GET /api/auth/google/failure

Google OAuth failure handler.

**Response:** Redirects to frontend with error message.

### Health Check

#### GET /api/health

Check if the server is running.

**Response:**

```json
{
  "message": "Server is running!"
}
```

## Validation Rules

### Signup Validation

- Username: 3-20 characters, alphanumeric and underscores only
- Email: Valid email format
- Password: Minimum 6 characters, must contain at least one lowercase letter, one uppercase letter, and one number

### Login Validation

- Email: Valid email format
- Password: Required

## Security Features

- Passwords are hashed using bcrypt with 10 salt rounds
- JWT tokens expire after 7 days
- Input validation and sanitization
- CORS enabled for cross-origin requests
- Error handling middleware

## Database Schema (MySQL)

The User model includes:

- id (String, Primary Key) - CUID format
- username (VARCHAR(50), Unique, Optional)
- email (VARCHAR(255), Unique)
- password (VARCHAR(255), Hashed, Optional for OAuth users)
- googleId (VARCHAR(255), Unique, Optional)
- firstName (VARCHAR(100), Optional)
- lastName (VARCHAR(100), Optional)
- avatar (VARCHAR(500), Optional)
- provider (VARCHAR(20), Default: "local") - "local" or "google"
- createdAt (DATETIME)
- updatedAt (DATETIME)

## MySQL Connection String Format

```
mysql://[username]:[password]@[host]:[port]/[database_name]
```

Example:

```
mysql://root:password123@localhost:3306/real_estate_db
```

## Troubleshooting

### Common MySQL Issues:

1. **Connection refused:**

   - Make sure MySQL service is running
   - Check if the port (3306) is correct
   - Verify username and password

2. **Database doesn't exist:**

   - Create the database manually: `CREATE DATABASE real_estate_db;`

3. **Prisma migration issues:**
   - Make sure the database exists
   - Check your DATABASE_URL format
   - Try: `npx prisma db push` for development
