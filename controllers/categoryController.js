/** @format */
const db = require("../db/models");
const Controller = require("./Controller");
class categoryController {
  //  categories(req, res) {
  //    res.render("index");
  //   // try {
  //   //   // let categories = await db.categories.findAll({ raw: true, nest: true });
  //   //   // console.log(categories);

  //   // } catch (error) {
  //   //   // return res.send("error www");
  //   // }
  // }
  async getAllCategories(req, res) {
    try {
      let response = await db.categories.findAllL({ raw: true, nest: true });
      console.log(response);
      return Controller.response(res, 200, "get all successful categories", response);
    } catch (error) {
      Controller.response(res, 204, error.message, null);
    }
  }
}
module.exports = new categoryController();
