#  Stock Trading & Portfolio Management Platform

A full-stack **stock trading and portfolio management platform** inspired by Zerodha, built using the **MERN stack**.  
The project includes a **public landing website**, **secure authentication**, and an **interactive trading dashboard** with portfolio analytics.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Usage Guide](#usage-guide)
- [Testing](#testing)
- [Security Features](#security-features)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)

## ✨ Features

### Authentication
- User signup & login using **JWT**
- Password hashing with **bcrypt**
- HTTP-only cookies
- Protected routes for dashboard access

### Landing Website
- Zerodha-inspired UI
- Responsive pages:
  - Home
  - Products
  - Pricing
  - About
  - Support
  - Signup / Login
- Component-based React architecture

### Trading Dashboard
- Portfolio overview
- Holdings, Orders, Positions
- Buy / Sell simulation
- Watchlist
- Interactive charts using **Chart.js**
- Context API for state management

### Backend APIs
- RESTful APIs using Express
- MongoDB schemas for users and trading data
- JWT authentication middleware
- Modular MVC structure

## 📦 Prerequisites

- Node.js (v18+ recommended)
- MongoDB (Local or Atlas)
- npm


## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Chart.js & react-chartjs-2
- CSS

### Dashboard
- React (Vite)
- Context API
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT
- bcrypt
- dotenv


## 📁 Project Structure

```
NewProject_1/
├── backend/
│ ├── controllers/
│ ├── middlewares/
│ ├── model/
│ ├── routes/
│ ├── schemas/
│ ├── utils/
│ └── index.js
│
├── frontend/
│ ├── src/
│ │ ├── landing_page/
│ │ ├── test/
│ │ └── App.jsx
│ └── vite.config.js
│
├── dashboard/
│ ├── src/
│ │ ├── components/
│ │ └── data/
│ └── vite.config.js
│
└── README.md
```


## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Stock-Trading-Platform.git
cd Stock-Trading-Platform
```
### 2️⃣ Install Dependencies
- Backend
```bash
cd backend
npm install
```

- Frontend (Landing Website)
```bash
cd frontend
npm install
```

- Dashboard
```bash
cd dashboard
npm install
```

### 3️⃣🔧 Environment Variables
Create a ```.env``` file inside the backend directory:

```env
PORT=3002
MONGO_URI=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
```
Make sure MongoDB is running locally or use MongoDB Atlas.

## ▶️ Running the Application
Start Backend
```bash
cd backend
npm start
```
- Start Frontend (Landing Website)
```bash
cd frontend
npm run dev
```

- Start Dashboard
```bash
cd dashboard
npm run dev
```

## 🔌 API Routes

### Auth
- POST /auth/signup
- POST /auth/login

### Dashboard
- GET /holdings
- GET /orders
- GET /positions


## 🔁 Application Flow
1. User lands on the Landing Website

2. User signs up or logs in

3. JWT token is issued and stored in cookies

4. User is redirected to the Dashboard

5. Protected routes verify authentication

6. Dashboard fetches user-specific data

## 🧪 Testing
- Unit testing setup using Vitest

- React Testing Library configured

- Sample component tests included (Hero.test.jsx)

## 🔐 Security Features
- Password hashing with bcrypt

- JWT-based authentication

- HTTP-only cookies

- Authentication middleware

- Protected routes

- Input validation on backend

## 🤝 Contributing
- Contributions are welcome!

1. Fork the repository

2. Create a feature branch
```bash
git checkout -b feature/your-feature
```

3. Commit changes
```bash
git commit -m "Add your feature"
```

4. Push to branch
```bash
git push origin feature/your-feature
```

5. Open a Pull Request

## 📝 License
This project is licensed under the ISC License - see the LICENSE file for details.

## 📞 Support
If you encounter any issues or have questions, please:
- Open an issue on GitHub
- Contact the project maintainer
- Check the existing issues for solutions

## 🙏 Acknowledgements
- Inspired by Zerodha
- React & Express documentation
- Chart.js
- MongoDB
- Open-source community

## 🔗 Demo

Deployment coming soon.

---

**Happy Coding!** 🚀

⭐ If you find this project helpful, please consider giving it a star!
