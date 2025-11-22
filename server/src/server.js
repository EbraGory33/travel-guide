import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
