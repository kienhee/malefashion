/** @format */
const web = require("./web");
const api = require("./api")
function routes(app) {
  app.use("/api/v1/",api)
  app.use("/", web);
  
}
module.exports = routes;
