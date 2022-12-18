/** @format */

const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

// router.post("/update-category/:id", categoryController.updateCategory);
// router.post("/add-new-category", categoryController.addCategory);
// router.post("/recently-deleted/:id", categoryController.destroyCategory);
// router.get("/recently-deleted", categoryController.recentlyDeleted);
router.post("/add-new-product", productController.addProduct);
router.get("/add-new-product", productController.createProduct);
router.get("/list-product", productController.listProduct);
module.exports = router;
