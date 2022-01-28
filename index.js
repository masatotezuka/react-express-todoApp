// https://reffect.co.jp/react/front-react-back-node
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

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
    { id: 1, taskName: "task1" },
    { id: 2, taskName: "task2" },
    { id: 3, taskName: "task3" },
  ]);
});

app.listen(port);
