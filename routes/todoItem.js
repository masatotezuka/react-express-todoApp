const express = require("express");
const router = express.Router();
const todoItem = require("../controllers/todoListsControllers");
const ValidationTodoItemForm = require("../utility/index");

router.get("/", todoItem.fetchAllTodo);
router.post("/", ValidationTodoItemForm, todoItem.createTodo);
router.delete("/", todoItem.deleteTodo);
router.put("/", ValidationTodoItemForm, todoItem.changeTodoItem);
router.put("/todoStatus", todoItem.changeTodoStatus);

console.log(router);

module.exports = router;
