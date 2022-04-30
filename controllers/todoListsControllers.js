const TodoLists = require("../models").TodoLists;

const getAllTodoItems = async () => {
  return await TodoLists.findAll({
    attributes: ["id", "todoTitle", "description", "deadline", "isComplete"],
  });
};

const todoItem = {
  async fetchAllTodo(req, res) {
    try {
      const results = await getAllTodoItems();
      console.log(results);
      return res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async createTodo(req, res) {
    try {
      const newTodoData = req.body[0];
      const results = await TodoLists.create({
        todoTitle: newTodoData.title,
        description: newTodoData.description,
        deadline: newTodoData.deadline,
        isComplete: false,
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async deleteTodo(req, res) {
    try {
      const todoId = req.body.id;
      console.log(todoId);
      await TodoLists.destroy({
        where: {
          id: todoId,
        },
      });
      await res.status(200).json({ deleteId: todoId });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async changeTodoStatus(req, res) {
    try {
      const updateTodoId = req.body[0].todoId;
      const updateTodoStatus = req.body[0].todoStatus;
      console.log(updateTodoId);
      await TodoLists.update(
        { isComplete: updateTodoStatus },
        { where: { id: updateTodoId } }
      );
      const results = await getAllTodoItems();
      console.log(results);
      await res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async changeTodoItem(req, res) {
    try {
      const updateTodo = req.body[0];
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
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = todoItem;
