const express = require("express");
const { createCategory, updateCategoryById, getCategory, getCategoryById } = require("../controllers/categoryController");
const { createProduct, updateProductById } = require("../controllers/productController");
const router = express.Router();

router.post("/category", createCategory)
router.put("/category/:id", updateCategoryById)
router.get("/category", getCategory)
router.get("/category/:id", getCategoryById)

router.post("/product", createProduct)
router.put("/product/:id", updateProductById)

module.exports = router;