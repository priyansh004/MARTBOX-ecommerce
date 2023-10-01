import express from "express";
import { getProductController, createProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.route("/products").get(getProductController);
router.route("/product/new").post(createProduct);


``
export  {router as productRoutes};