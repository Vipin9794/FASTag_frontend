


# 🚗 FASTag Recharge Web App

A full-featured FASTag Recharge web application built using **React.js** and **Context API**.  
This app allows users to recharge their FASTag, manage profiles, and view recharge history — all from one dashboard.

---

## ⚙️ Features

- 🔐 **Login / Logout System**
- 🪪 **User Profile Management**
- 💳 **FASTag Recharge System**
- 🧾 **Recharge History Tracking**
- 📱 **Responsive Design (Mobile + Desktop)**
- 🌐 PWA supported (Add to Home Screen)  
- ⚡ Fast and lightweight frontend
- ⚡ **Toast Notifications**
- 🌀 **Loading State Management**

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router, Context API, React Toastify 
- **Icons:** React Icons (Fa)
- **Styling:** CSS / TailwindCSS (as per setup)
- **State Management:** useContext + useReducer
- **Build Tool:** Vite / CRA (based on your setup)

---


## 🧩 Project Structure

```bash
frontend/
├── public/
│   └── Logo.png
├── src/
│   ├── components/              # Reusable components (Header, BankCard, Sidebar)
│   │   ├── Header.jsx
│   │   ├── BankCard.jsx
│   │   └── Slidbar.jsx
│   ├── context/                 # Global state management using React Context API
│   │   ├── RechargeContext.jsx
│   │   ├── WalletContext.jsx
│   │   └── UserProfile.jsx
│   ├── layouts/                 # Page layouts and UI sections
│   │   ├── Dashboard.jsx
│   │   ├── DashboardLayout.jsx
│   │   ├── FqcSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroDash.jsx
│   │   └── Navbar.jsx
│   ├── pages/                   # App pages and popups
│   │   ├── AddMoneyPopup.jsx
│   │   ├── BankListSection.jsx
│   │   ├── FastagRecharge.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── RechargeHistory.jsx
│   │   ├── RechargeMoney.jsx
│   │   ├── Support.jsx
│   │   ├── UserProfileModel.jsx
│   │   └── WalleteHistory.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.html
│   └── styles/
│       └── main.css
├── package.json
└── README.md




---

## 🚀 Getting Started

Follow these steps to set up the project locally 👇

### 1️⃣ Clone the Repository
```bash
git clone  https://github.com/Vipin9794/FASTag_frontend.git


2️⃣ Navigate to the Project Folder

cd frontend

3️⃣ Install Dependencies

npm install

4️⃣ Run the Project

npm run dev


Your app will start on 👉 http://localhost:5173


# Usage

Login/Register using your credentials

Enter vehicle number and recharge amount

Confirm recharge → check your Recharge History

Update your Profile only once (if not already done)

🔔 Toast Messages

Error messages when fields are empty

Success messages after recharge and profile updates


📜 License

---MIT License



