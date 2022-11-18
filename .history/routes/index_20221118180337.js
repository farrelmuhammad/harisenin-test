const express = require("express");
const { createCategory, updateCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/category", createCategory)
router.put("/category", updateCategory)

module.exports = router;