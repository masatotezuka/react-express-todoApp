const express = require("express");
const router = express.Router();
const todoItem = require("../controllers/todoListsControllers");
const validationTodoItemForm = require("../utility/index");

router.get("/", todoItem.fetchAllTodo);
router.post("/", validationTodoItemForm, todoItem.createTodo);
router.delete("/", todoItem.deleteTodo);
router.put("/", validationTodoItemForm, todoItem.changeTodoItem);
router.put("/todoStatus", todoItem.changeTodoStatus);

module.exports = router;
