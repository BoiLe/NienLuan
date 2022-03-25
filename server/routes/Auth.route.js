import express from "express";
const router = express.Router();
import {
  login,
  logout,
  register,
  RequestRefreshToken,
} from "../controllers/AuthController.js";
import {
  verifyToken,
  verifyTokenAdmin,
} from "../controllers/MiddlewareController.js";
// REGISTER
router.post("/register", register);
//Login
router.post("/login", login);
//REFRESH
router.post("/refresh", RequestRefreshToken);
//LOGout
router.post("/logout", verifyToken, logout);
export default router;
