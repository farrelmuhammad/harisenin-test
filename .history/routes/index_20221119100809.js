const express = require("express");
const { createCategory, updateCategoryById, getCategory, getCategoryById } = require("../controllers/categoryController");
const { createProduct, updateProductById, getProduct, getProductById } = require("../controllers/productController");
const router = express.Router();
const upload = require('../utils/multer');



router.post("/category", upload.single('image'), createCategory)
router.put("/category/:id", updateCategoryById)
router.get("/category", getCategory)
router.get("/category/:id", getCategoryById)

router.post("/product", multerProduct.array("image", 5), createProduct)
router.put("/product/:id", updateProductById)
router.get("/product", getProduct)
router.get("/product/:id", getProductById)

module.exports = router;