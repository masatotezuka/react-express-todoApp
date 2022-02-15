const Sequelize = require("sequelize");
const sequelize = require("../model/index");
const TodoLists = require("../model/todo-lists");

const getAllTodoItems = async () => {
  return await TodoLists.findAll({
    attributes: ["id", "todoTitle", "description", "deadline", "isComplete"],
  });
};

const todoItem = {
  async fetchAllTodo(req, res, next) {
    try {
      console.log("database get!");
      const results = await getAllTodoItems();
      return res.status(200).json(results);
    } catch (error) {
      console.log(error);
    }
  },
  async createTodo(req, res, next) {
    try {
      const newTodoData = req.body[0];
      await TodoLists.create({
        todoTitle: newTodoData.title,
        description: newTodoData.description,
        deadline: newTodoData.deadline,
        isComplete: false,
      });
      const rows = await sequelize.query("select * from TodoLists");
      res.status(200);
      console.log(rows);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTodo(req, res, next) {
    try {
      const todoId = req.body.id;
      console.log(todoId);
      await TodoLists.destroy({
        where: {
          id: todoId,
        },
      });
      console.log("comleted delete");
      await res.status(200).json({ deleteId: todoId });
    } catch (error) {
      console.log(error);
    }
  },
  async changeTodoStatus(req, res, next) {
    try {
      const updateTodoId = req.body[0].todoId;
      const updateTodoStatus = req.body[0].todoStatus;
      console.log(updateTodoId);
      await TodoLists.update(
        { isComplete: updateTodoStatus },
        { where: { id: updateTodoId } }
      );
      const results = await getAllTodoItems();
      await res.status(200).json(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  },
  async chageTodoItem(req, res, next) {
    try {
      const updateTodo = await req.body[0];
      await TodoLists.update(
        {
          todoTitle: updateTodo.title,
          description: updateTodo.description,
          deadline: updateTodo.deadline,
        },
        { where: { id: updateTodo.id } }
      );
      const results = await getAllTodoItems();
      res.status(200).json(results);
      console.log(`GET UPDATEDATA${updateTodo.title}`);
      console.log(req.body);
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
