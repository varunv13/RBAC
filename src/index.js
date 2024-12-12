import express from "express";
import dotEnv from "dotenv/config";
import cookieParser from "cookie-parser";
import dbConnect from "./config/dbConnect.js"
import authRoutes from "./routes/auth_routes.js"
import roleBasedRoutes from "./routes/user_routes.js"

dbConnect();

const app = express();

// middlewares
app.use(express.json()); // will help us to get json data
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", roleBasedRoutes);

// start the server
const PORT = process.env.PORT || 1303;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});