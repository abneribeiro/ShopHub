import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database";
// import authRoutes from './routes/authRoutes';
import productRoutes from "./routes/productRoutes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes)

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend! Now is working" });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
