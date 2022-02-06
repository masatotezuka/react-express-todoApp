const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const config = require("../config/config");

const sequelize = new Sequelize(
  config.DATABASE,
  config.USERNAME,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
