/** @format */
const web = require("./web");
const api = require("./api");
const category = require("./category");
const product = require("./products");
function routes(app) {
  app.use("/api/v1/", api);
  app.use("/product", product);
  app.use("/category", category);
  app.use("/", web);
}
module.exports = routes;
