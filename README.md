# 🚲 Bike Service Management

A backend application to manage bike servicing schedules, records, and statuses. Built with TypeScript, Prisma ORM, and PostgreSQL.

---

## 🔗 Live Backend Link

- **Vercel Deployment**: [https://bike-servicing-management-eta.vercel.app](https://bike-servicing-management-eta.vercel.app)

---

## 🧱 Tech Stack

- **TypeScript** – Type-safe development  
- **Node.js + Express** – Server-side framework  
- **Prisma ORM** – Type-safe database access  
- **PostgreSQL** – Relational database  
- **Zod** – Input validation  
- **dotenv** – Environment variable management  
- **CORS, Morgan, Helmet** – Middleware for security and logging  

---

## ⚙️ Setup Guide

### 1. Clone the Repository

git clone https://github.com/your-username/bike-service-management.git
cd bike-service-management

2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env file and add your PostgreSQL database URL:

DATABASE_URL=postgresql://user:password@localhost:5432/db_name
PORT=5000

4. Generate Prisma Client
npx prisma generate

5. Run Migrations
npx prisma migrate dev --name init

6. Start the Server
npm run dev

## 🌟 Key Features
🛠️ CRUD operations for customer bike service records

📅 Service scheduling with status management (pending, in-progress, completed)

🔍 Get service records by bike ID or all records

✅ Robust error handling using Zod and custom AppError

🌐 Public API accessible via Vercel deployment
