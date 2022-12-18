/** @format */
const _ = require("lodash");
const moment = require("moment");

const db = require("../db/models");
const Controller = require("./Controller");
class categoryController {
  async categories(req, res) {
    try {
      let categories = await db.categories.findAll({ raw: true, nest: true, where: { isActive: 1 } });
      res.render("category", { title: "Category", categories, moment: moment });
    } catch (error) {
      return res.render(error);
    }
  }
  async recentlyDeleted(req, res) {
    try {
      let categories = await db.categories.findAll({ raw: true, nest: true, where: { isActive: 0 } });
      res.render("recentlyDeleted", { title: "Recently Deleted", categories });
    } catch (error) {
      return res.render(error);
    }
  }
  async getAllCategories(req, res) {
    try {
      let response = await db.categories.findAll({ raw: true, nest: true });
      return Controller.response(res, 200, "get all successful categories", response);
    } catch (error) {
      return Controller.response(res, 204, error.message, null);
    }
  }
  async addCategory(req, res) {
    try {
      let { name, description, image } = req.body;
      if (_.isEmpty(name) || _.isEmpty(description) || _.isEmpty(image)) {
        return Controller.response(res, 500, "Please enter all fields", "");
      } else {
        let response = await db.categories.create({ name, description, image });
        return Controller.response(res, 200, "Add new successful categories", response);
      }
    } catch (error) {
      return Controller.response(res, 500, error.message, null);
    }
  }

  async updateCategory(req, res) {
    try {
      let { name, image, description, isActive } = req.body;
      let response = await db.categories.update(
        { name, image, description, isActive },
        {
          where: {
            id: req.params.id,
          },
        },
      );
      return Controller.response(res, 200, "update successful categories", response);
    } catch (error) {
      return Controller.response(res, 500, error.message, null);
    }
  }
  async destroyCategory(req, res) {
    try {
      let response = await db.categories.destroy({
        where: {
          id: req.params.id,
        },
      });
      return Controller.response(res, 200, "Delete successful categories", response);
    } catch (error) {
      return Controller.response(res, 500, error.message, null);
    }
  }
}
module.exports = new categoryController();
