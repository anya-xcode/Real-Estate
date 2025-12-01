## Real-Estate Platform

A full-stack real estate web application built with React (Vite) and Node.js/Express, using Prisma ORM and MySQL. It supports property listings, search, messaging, reviews, authentication (email/password & Google OAuth), admin management, and more.

## Table of Contents

Features
Project Structure
Environment Variables
Setup & Installation
Authentication (Signup/Signin)
Google OAuth
Admin Panel
Property Management
Messaging & Reviews
PDF Download

## Features

User signup/signin (email/password, Google OAuth)
Admin login and property/review management
Add, edit, delete property listings
Upload property images (Cloudinary)
Search, filter, and view properties
Messaging system for buyers/sellers
User reviews and ratings
Download property details as PDF
Responsive UI with modern design

## Project Structure

real-estate-website/
├─ backend/
│   ├─ src/
│   │   ├─ app.js
│   │   ├─ routes/
│   │   ├─ controllers/
│   │   ├─ middlewares/
│   │   ├─ config/
│   ├─ prisma/
│   │   ├─ schema.prisma
│   │   ├─ migrations/
├─ frontend/       
│   ├─ src/
│   │   ├─ pages/
│   │   ├─ components/
│   │   ├─ context/
│   │   ├─ hooks/
│   │   ├─ data/
│   │   ├─ assets/
│   ├─ public/
│   ├─ vercel.json 
├─ README.md
├─ plan.txt

## Environment variables

Create `.env` files in the `backend/` and `frontend/` folders based on the examples below. Do not commit secrets to source control.

backend/.env (example)

```
PORT=5001
DATABASE_URL="mysql://<user>:<pass>@<host>:<port>/<db>"
FRONTEND_URL="https://your-frontend-url"
SESSION_SECRET="your_secret"
JWT_SECRET="your_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GOOGLE_CALLBACK_URL="https://your-backend-url/api/auth/google/callback"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

frontend/.env (example)

```
VITE_API_URL="https://your-backend-url"
VITE_APP_NAME="Real-Estate-Frontend"
```

## Setup & Installation
Prerequisites
Node.js (16+)
npm or yarn
MySQL database (or Railway for cloud DB)
Cloudinary account for image uploads
Google Cloud project for OAuth

Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate deploy # or migrate dev for local
npm run dev
```

Frontend
```bash
cd frontend
npm install
npm run dev
```

## Admin Panel
Please go to /admin route
Admin Login: Enter admin password to access admin dashboard.

Admin Features:
View all properties and reviews
Approve/deny property listings
Delete properties/reviews
Change admin password

## Property Management
Add/Edit Property:
Multi-step form for property details, location, images, amenities
Address fields: country, state, city (dynamic dropdowns)
Upload images to Cloudinary
Edit/Delete:
Owners can edit or delete their properties
Search/Filter:
Search bar, filters by type, location, price

## Messaging & Reviews
Messaging:
Buyers and sellers can chat about properties
Reviews:
Users can leave reviews and ratings for properties

## PDF Download
Download property details as PDF (with images) using jsPDF.
Button available on property details page.


## Deployment
Frontend: Deploy to Vercel.
Backend: Deploy to Render

## License
MIT