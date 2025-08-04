# Fundraising Intern Portal

A prototype of a fundraising portal for interns, built with React, Firebase, and Shadcn/UI.

---

## 📋 Table of Contents

- [🧪 How to Test](#-how-to-test)
- [🚀 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🔧 Running Locally](#-running-the-project-locally)
- [📸 Screenshots](#-screenshots)

---

## 🧪 How to Test

To test the login functionality and view the dashboard, use one of the pre-registered intern accounts from the database:

-   **Email:** `alex@example.com`
-   **Email:** `brenda@example.com`
-   **Password:** You can enter any password. It is not validated 😶.

---

## 🚀 Live Demo

**You can view the live hosted project here:**
[https://fundraising-portal-omega.vercel.app/](https://fundraising-portal-omega.vercel.app/) 

---

## ✨ Features

- **Dummy Intern Login:** Securely "logs in" pre-registered interns.
- **Dynamic Dashboard:** Displays personalized intern data, including name and referral code.
- **Real-time Stats:** Fetches and calculates total funds raised and number of donors from Firestore.
- **Shareable Campaign Link:** Generates a unique donation link for each intern with easy copy-to-clipboard functionality.
- **Gamified Rewards Section:** Shows visually distinct "locked" and "unlocked" badges based on fundraising milestones.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), JavaScript, Tailwind CSS
- **UI:** Shadcn/UI
- **Backend & Database:** Firebase (Firestore)
- **Form Management:** React Hook Form
- **Schema Validation:** Zod
- **Notifications:** Sonner
- **Deployment:** Vercel

---

## 🔧 Running the Project Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shaimaa01/fundraising-portal.git
    cd fundraising-portal
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 📸 Screenshots

**Login Page:**
![Login Page Screenshot](/src/assets/loginPage.png) 

**Intern Dashboard:**
![Dashboard Screenshot](/src/assets/dashboard.png) 
