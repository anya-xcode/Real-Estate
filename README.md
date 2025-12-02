# Real Estate Platform

A modern, full-stack real estate web application built with **React (Vite)** + **Node.js/Express**, powered by **Prisma ORM** and **MySQL**. Feature-rich platform for buying, selling, and renting properties with advanced search, interactive maps, messaging, reviews, loan tools, favorites, and more.

## Key Features

- User authentication: Email/password + Google OAuth login
- Protected routes – Sign-in required to access most pages
- Search properties by city & powerful filters (price, type, bedrooms, etc.)
- Interactive Map View to discover properties (Leaflet/Google Maps)
- Like / Favorite properties – Saved and displayed in user profile
- User Profile page – Shows liked properties, own listings, and reviews
- Loan Assistance Page with:
  - EMI Calculator (calculate monthly installments)
  - Loan Eligibility Checker (based on income, expenses, credit score)
- Add/Edit/Delete property listings (multi-step form)
- Upload property images (Cloudinary)
- Messaging system between buyers and sellers
- Reviews & Ratings system (with star rating + text)
- Download property details as PDF (including images) using jsPDF
- Fully functional Admin Dashboard
- Responsive & modern UI

## Admin Dashboard

**Route:** `/admin`  
**Current Admin Password:** `270805`  

### Admin Features
- Approve/Reject/Delete any property
- Manage & delete reviews
- View all users, messages, and activity
- Change admin password

## Tech Stack

**Frontend**
- React + Vite
- React Router (with protected routes)
- Axios
- Leaflet or Google Maps API
- jsPDF for PDF generation
- Tailwind CSS / Custom styling

**Backend**
- Node.js + Express
- Prisma ORM
- MySQL
- JWT + Session authentication
- Google OAuth 2.0 (Passport.js)
- Cloudinary for image uploads

## Project Structure

```
real-estate-website/
├─ backend/
│   ├─ src/
│   │   ├─ routes/
│   │   ├─ controllers/
│   │   ├─ middlewares/
│   │   └─ app.js
│   └─ prisma/schema.prisma
├─ frontend/
│   ├─ src/
│   │   ├─ pages/          → Home, Listings, PropertyDetail, Profile, Loan, Admin, etc.
│   │   ├─ components/     → PropertyCard, MapView, EMICalculator, ReviewForm, etc.
│   │   ├─ context/        → AuthContext
│   │   └─ assets/
│   └─ public/
└─ README.md
```

## Environment Variables

### backend/.env
```env
PORT=5001
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DB_NAME"
FRONTEND_URL="http://localhost:5173"
SESSION_SECRET="your_very_strong_secret_here"
JWT_SECRET="another_strong_jwt_secret"
GOOGLE_CLIENT_ID="your_google_client_id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GOOGLE_CALLBACK_URL="http://localhost:5001/api/auth/google/callback"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

### frontend/.env
```env
VITE_API_URL="http://localhost:5001"
VITE_APP_NAME="Real Estate Platform"
```

## Setup & Installation

### Prerequisites
- Node.js ≥ 18
- MySQL database
- Cloudinary account
- Google OAuth credentials

### Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate deploy
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Useful Routes

- Home: `/`
- All Properties: `/properties`
- Property Detail: `/property/:id`
- User Profile: `/profile`
- Favorites: Visible in Profile
- Loan Tools: `/loan`
- Admin Panel: `/admin` (Password: `270805`)
- Map View: Available on homepage & listings page

## Deployment

- **Frontend:** Vercel
- **Backend:** Render

## License

MIT License – Free to use, modify, and distribute.
