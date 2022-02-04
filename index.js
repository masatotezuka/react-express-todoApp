// https://reffect.co.jp/react/front-react-back-node
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const model = require("./model/index");
dotenv.config();
//configの読み込みはdot.env()の後
const config = require("./config/config");
const { application } = require("express");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSucessStatus: 200,
};
// https://www.youtube.com/watch?v=CLaYhEbzIMM&list=RDCMUCoYzQqZNCRqqAomJwJ6yEdg&index=10
app.use(cors(corsOptions));
// https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3

app.get("/", (req, res) => {
  res.send("Heelo");
});

app.get("/api", (req, res) => {
  res.json([
    { id: 1, taskName: "task1", taskContent: "test1", deadline: "2021-12-31" },
    { id: 2, taskName: "task2", taskContent: "test2", deadline: "2021-12-31" },
    { id: 3, taskName: "task3", taskContent: "test3", deadline: "2021-12-12" },
  ]);
});

app.listen(8000);
