import "../App.scss";
import React from "react";
import { TodoBody } from "./TodoBody";

const App = () => {
  console.log("app");
  return (
    <div className="App">
      <h1>Todo アプリ</h1>
      <TodoBody />
    </div>
  );
};

export default App;
