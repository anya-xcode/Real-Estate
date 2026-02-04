# Real Estate Platform

A full-stack web application where users can find properties to buy, list their own properties for sale, and communicate directly with property owners. The platform also includes loan calculation tools, an interactive map to view property locations, and an admin panel for approving property listings.

---

## What This Website Does

- Buyers can browse and search properties listed on the platform
- Property owners can upload properties they want to sell
- Buyers can message property owners to ask questions
- Users can calculate loan EMI and check loan eligibility
- Properties are shown on a map based on their location
- Admin approves or rejects properties before they become public

---

## Screenshots

*(Screenshots for each page will be added below)*

### Home Page
<!-- Screenshot placeholder -->

### Property Listings Page
<!-- Screenshot placeholder -->

### Property Detail Page
<!-- Screenshot placeholder -->

### User Profile Page
<!-- Screenshot placeholder -->

### Loan Page (EMI Calculator & Eligibility Checker)
<!-- Screenshot placeholder -->

### Admin Dashboard
<!-- Screenshot placeholder -->

---

## Screen Recording

*(A complete screen recording of the application will be added here)*

<!-- Screen recording placeholder -->

---

## Features

### User Features
- User authentication using email/password and Google login
- Browse properties available for purchase
- Search properties by city and apply filters (price, bedrooms, property type, etc.)
- View property locations on an interactive map
- Like and save properties to the user profile
- Upload properties for selling
- Edit or delete own property listings
- Message property owners directly
- Add reviews and ratings
- Download property details as a PDF
- Loan tools:
  - EMI Calculator
  - Loan Eligibility Checker

---

### Admin Features

**Admin Route:** `/admin`  
**Admin Password:** `270805`

- View all uploaded properties
- Approve or reject property listings
- Delete properties if required
- Manage and delete user reviews
- View users and messages
- Change admin password

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS
- Leaflet / Google Maps API
- jsPDF

### Backend
- Node.js
- Express
- Prisma ORM
- MySQL
- JWT and session-based authentication
- Google OAuth (Passport.js)
- Cloudinary for image uploads

---

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
