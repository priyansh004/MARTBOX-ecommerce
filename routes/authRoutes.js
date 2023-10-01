import express from "express";
import { loginController  , registerController } from "../controllers/authControllers.js";

const router = express.Router();

router.route("/login").post(loginController);

router.post("/signup",registerController);

export  { router as authRoutes};
