// https://reffect.co.jp/react/front-react-back-node
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const connectedWithSql = require("./model/index");
const model = require("./model/todo-lists");
const todoLists = require("./model/todo-lists");
dotenv.config();
//configの読み込みはdot.env()の後
const config = require("./config/config");
const { application } = require("express");
const todoItem = require("./controllers/todoListsControllers");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSucessStatus: 200,
};
// https://www.youtube.com/watch?v=CLaYhEbzIMM&list=RDCMUCoYzQqZNCRqqAomJwJ6yEdg&index=10
app.use(cors(corsOptions));
//https://zenn.dev/luvmini511/articles/d8b2322e95ff40 cors
// https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3

app.use(express.json()); // application/json
// app.use(express.urlencoded({ extended: true }));

app.get("/api/todoItem", todoItem.fetchAllTodo);
app.post("/api/todoItem", todoItem.createTodo);
app.delete("/api/todoItem", todoItem.deleteTodo);
app.put("/api/todoStatus", todoItem.changeTodoStatus);
app.put("/api/todoItem", todoItem.chageTodoItem);

app.listen(8000);
