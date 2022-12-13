/** @format */

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("malefashion", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

async function db() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
module.exports = db;
