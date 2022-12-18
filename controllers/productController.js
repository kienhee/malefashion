/** @format */
const _ = require("lodash");
const db = require("../db/models");
const Controller = require("./Controller");
const moment = require("moment");
class productController {
  async listProduct(req, res) {
    try {
      let products = await db.products.findAll({ raw: true, nest: true, where: { isActive: 1 } });
      res.render("pages/product/listActive", { title: "Product", products, moment: moment });
    } catch (error) {
      return res.render(error);
    }
  }
  async createProduct(req, res) {
    try {
      let categories = await db.categories.findAll({ raw: true, nest: true, where: { isActive: 1 } });
      res.render("pages/product/addProduct", { title: "Product", products: [], categories });
    } catch (error) {
      return res.render(error);
    }
  }
  async addProduct(req, res) {
    try {
      let { name, thumnail, categoryId, price, discount, description } = req.body;
      console.log({ name, thumnail, categoryId, price, discount, description });
      let response = await db.products.create({ name, thumnail, categoryId, price, discount, description });
      return Controller.response(res, 200, "createl successful product", response);
    } catch (error) {
      console.log(error);
      return res.render(error);
    }
  }
}
module.exports = new productController();
