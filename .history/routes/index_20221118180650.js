const express = require("express");
const { createCategory, updateCategoryById } = require("../controllers/categoryController");
const router = express.Router();

router.post("/category", createCategory)
router.put("/category/:id", updateCategoryById)

module.exports = router;