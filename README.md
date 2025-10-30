# Real-Estate (Sample)

A small full‑stack Real Estate demo application (frontend + backend) built with React (Vite) and Node/Express using Prisma for data access. It demonstrates basic property listings, search UI, and authentication (email/password and Google OAuth).

This README explains how to set up and run the project locally for development.

## Project structure (top-level)

- `backend/` — Node.js + Express API, Prisma schema, and auth routes
- `frontend/` — React app (Vite) with pages, components and UI

## Quick start — prerequisites

- Node.js (16+ recommended)
- npm or yarn
- A local database supported by Prisma (the project uses the `DATABASE_URL` env var). For local development you can use SQLite, Postgres, or MySQL depending on your `backend/prisma/schema.prisma` configuration.

## Environment variables

Create `.env` files in the `backend/` and `frontend/` folders based on the examples below. Do not commit secrets to source control.

backend/.env (example)

```
PORT=5001
DATABASE_URL="<your-database-url>"
FRONTEND_URL=http://localhost:5174
SESSION_SECRET="your_secret"
JWT_SECRET="your_secret"
GOOGLE_CLIENT_ID="your_id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GOOGLE_CALLBACK_URL="http://localhost:5001/api/auth/google/callback"
```

frontend/.env (example)

```
VITE_API_URL=http://localhost:5001
```

Notes:

- The Google OAuth redirect URI in the Google Cloud Console must match `GOOGLE_CALLBACK_URL` exactly.
- Use `FRONTEND_URL` so the backend can redirect to the frontend after OAuth.

## Install dependencies

Install backend deps and generate the Prisma client (run from repo root):

```bash
cd backend
npm install
# If you changed the Prisma schema, run:
npx prisma generate
```

Install frontend deps:

```bash
cd ../frontend
npm install
```

## Run the app locally (development)

1. Start the backend (from `backend/`):

```bash
cd backend
# make sure your .env is configured
npm run dev
```

This runs the Express server (nodemon in dev) and Prisma client will use `DATABASE_URL`.

2. Start the frontend (from `frontend/`):

```bash
cd frontend
npm run dev
```

Visit the Vite URL printed in the terminal (commonly `http://localhost:5174`). The frontend uses `VITE_API_URL` to talk to the backend.


## Project purpose

This project is a small demo to showcase a typical real‑estate listing app: a React-based frontend with search and listing UI, and a Node/Express backend that manages users, authentication (including Google OAuth), and property data via Prisma. It is intended as a starting point for a full product and as a learning/reference repository.



