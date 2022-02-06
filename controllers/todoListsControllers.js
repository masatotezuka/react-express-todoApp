const Sequelize = require("sequelize");
const sequelize = require("../model/index");
const TodoLists = require("../model/todo-lists");

const todoItem = {
  async fetchAll(req, res, next) {
    try {
      const results = await TodoLists.findAll({
        attributes: [
          "id",
          "todoTitle",
          "description",
          "deadline",
          "isComplete",
        ],
      });
      console.log("database get!");
      return res.status(200).json(results);
    } catch (error) {
      console.log(error);
    }
  },
};

// (async () => {
// const user = await TodoLists.create({
//   todoTitle: "task5",
//   description: "hogehoge3",
//   deadline: "2022-02-15",
//   isComplete: false,
// });
//   const rows = await sequelize.query("select * from TodoLists");
//   console.log(rows);
// })();

module.exports = todoItem;
