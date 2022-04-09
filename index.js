// https://reffect.co.jp/react/front-react-back-node
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
//configの読み込みはdotenv.env()の後
const routes = require("./routes/todoItem");
const corsOptions = {
  origin: "http://localhost:3367",
  optionsSucessStatus: 200,
};
// https://www.youtube.com/watch?v=CLaYhEbzIMM&list=RDCMUCoYzQqZNCRqqAomJwJ6yEdg&index=10
app.use(cors(corsOptions));
//https://zenn.dev/luvmini511/articles/d8b2322e95ff40 cors
//https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3

app.use(express.json());

//今は使わない
// app.use(express.urlencoded({ extended: true }));

app.use("/api/todoItem", routes);

app.listen(8000);
