const express = require("express");
const { createCategory, updateCategoryById, getCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/category", createCategory)
router.put("/category/:id", updateCategoryById)
router.get("/category", getCategory)

module.exports = router;