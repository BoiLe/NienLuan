import express from "express";
import {
  CreateOrder,
  DeleteOrderId,
  GetOrder,
  GetOrderId,
  UpdateOrderId,
} from "../controllers/OrderController.js";
const router = express.Router();

router.get("/", GetOrder);
router.post("/", CreateOrder);
router.get("/:id", GetOrderId);
router.patch("/:_id", UpdateOrderId);
router.delete("/:id", DeleteOrderId);
export default router;
