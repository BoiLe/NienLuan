import express from "express";
const router = express.Router();
import {
  GetProduct,
  CreateProduct,
  UpdateproductId,
  GetproductId,
  DeleteproductId,
} from "../controllers/ProductController.js";

router.get("/", GetProduct);
router.post("/", CreateProduct);
router.get("/:id", GetproductId);
router.patch("/:_id", UpdateproductId);
router.delete("/:id", DeleteproductId);
export default router;
