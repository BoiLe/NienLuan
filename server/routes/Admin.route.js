import express from "express";
const router = express.Router();
import { deleteUser, getAllUser } from "../controllers/AdminControlller.js";
import { verifyToken, verifyTokenAdmin } from "../controllers/MiddlewareController.js";

router.get("/",  getAllUser);
router.delete("/:id",verifyTokenAdmin, deleteUser);

export default router;
