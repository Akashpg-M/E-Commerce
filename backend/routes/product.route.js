import express from "express";
import {getAllProduct} from "../controllers/product.controller.js";
import {protectRoute, adminRoute} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProduct); //should only be accesable to user

export default router;