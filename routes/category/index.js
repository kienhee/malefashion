/** @format */

const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/categoryController");

router.post("/update-category/:id", categoryController.updateCategory);
router.post("/add-new-category", categoryController.addCategory);
router.post("/recently-deleted/:id", categoryController.destroyCategory);
router.get("/recently-deleted", categoryController.recentlyDeleted);
router.get("/", categoryController.categories);
module.exports = router;
