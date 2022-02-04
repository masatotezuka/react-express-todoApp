const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const config = require("../config/config");
console.log(config.PORT);
console.log(config.USERNAME);
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

const TodoLists = sequelize.define("todoLists", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  todoTitle: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  deadline: {
    type: Sequelize.DATE,
  },
  isComplete: {
    type: Sequelize.BOOLEAN,
  },
});

// TodoLists.sync();
// console.log("All models were synchronized successfully.");

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// TodoLists.sync({ force: true });

// (async () => {
//   await TodoLists.sync({ force: true });
//   const user = await TodoLists.create({
//     id: 1,
//     todoTitle: "alice",
//     description: "husigi",
//     deadline: "2022-02-01",
//     isComplete: true,
//   });
//   const rows = await sequelize.query("select * from TodoLists");
//   console.log(rows);
// })();

module.exports = { sequelize: sequelize, TodoLists: TodoLists };
