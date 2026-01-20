import express from "express";
import { getCurrentUser} from "../controllers/user.controllers.js";
import authMiddleware from "../middlewares/isAuth.js"; // Authentication middleware for protected routes 

const userRoutes = express.Router();

userRoutes.get("/current",authMiddleware, getCurrentUser); // Get current authenticated user details 

export default userRoutes;