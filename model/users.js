const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(
  config.DATABASE,
  config.USERNAME,
  config.PASSWORD,
  {
    dialect: "mysql",
    host: config.HOST,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
