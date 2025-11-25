# FootNotes

**FootNotes** is a full-stack, web application that provide tourist attractions best places to eat and places to stay on popular travel destinations.

Built using the MERN Stack (MongoDB, Express, React, Node.js), FootNotes follows a production-ready architecture featuring secure authentication, optimized data fetching, and a smooth, responsive user experience.

**Live Website:** [https://footnotes-journal.vercel.app]

**Server:** [https://travel-guide-f66l.onrender.com]

---

## Folder Structure

```text
├── server/ 
└── client/
```

## Backend
A robust REST API handling business logic, user sessions, and game state persistence.

- Authentication:

  - JWT: Stored in secure, HttpOnly cookies for protected routes.

- Security: Implements bcrypt for password hashing, CORS policies, and custom validation middleware.

- Database: MongoDB (via Mongoose) with optimized indexing for fast lookups.

REST API powering user authentication, and location details.


**Key Features**

- Authentication
  - Local Strategy: For username/password login 
  - JWT Strategy: Issues secure, HttpOnly cookie-based tokens for protected routes

- Security
  - Password hashing via bcrypt
  - Proper CORS rules
  - Sanitized request validation


- Database
  - MongoDB (via Mongoose)

## Frontend
A fast, responsive React interface designed to help travelers browse, save, and revisit curated travel content.

**Highlights**

- State Management:
Managed with redux, enabling clean, scalable global state handling.


## Getting Started

1. Clone the Repository

```bash
git clone [https://github.com/your-username/pokeguesser.git](https://github.com/your-username/pokeguesser.git)
cd pokeguesser
```

2. Backend Setup

```bash
cd backend
npm install
```
Configuration: Create a .env file in /backend:

```.env

PORT=3000

MONGO_URL= 
NODE_ENV=development

SALT_ROUNDS=10 or any number you want
ACCESS_TOKEN_SECRET=
TOKEN_EXPIRES_IN=

CLIENT_ORIGIN=

unsplash_Access_Key = 

Geoapify_API_Key=
```
Start Server:

```bash
npm run dev
```

1. Frontend Setup
Open a new terminal, navigate to the frontend folder, and start the client.

```bash
cd ../frontend
npm install
```
Configuration: Create a .env file in /frontend:

```.env
VITE_SERVER_URL = [ Api base Url ]
```
Start Client:

```bash
npm run dev
```
Visit http://localhost:5173 (or the port Vite assigns) to play!
