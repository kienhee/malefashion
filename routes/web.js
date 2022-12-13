/** @format */

const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/category", function (req, res) {
  res.render("category", { title: "category" });
});
router.get("/", function (req, res) {
  res.render("index", { title: "Dashboard" });
});


module.exports = router;
