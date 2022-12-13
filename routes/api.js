/** @format */

const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
//Category
router.get("/category/get-all-categories", categoryController.getAllCategories);

module.exports = router;
