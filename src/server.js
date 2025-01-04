import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import talesRoutes from "./routes/talesRoutes.js";
import authenticateUser from "./middleware/authenticateUser.js";

dotenv.config();
const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRoutes);

app.use("/user", authenticateUser, userRoutes);
app.use("/tales", talesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
