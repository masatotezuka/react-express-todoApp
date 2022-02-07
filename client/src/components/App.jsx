import "../App.scss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoListsTables } from "./TodoLists";

const App = () => {
  const initialTodoLists = [
    { id: "", todoTitle: "", desctiption: "", deadline: "" },
  ];
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  const unCompletedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === false
  );
  const completedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === true
  );
  useEffect(() => {
    const getTodoLists = async () => {
      try {
        const response = await fetch("http://localhost:8000");
        const jsondata = await response.json();
        setTodoLists(jsondata);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoLists();
  }, []);
  return (
    <div className="App">
      <h1>Todo アプリ</h1>
      <TodoAdd></TodoAdd>
      <h2>未完了リスト</h2>
      <div className="todo-container">
        <div className="todo-table">
          <TodoListsTables todoLists={unCompletedTodoLists}></TodoListsTables>
        </div>
      </div>
      <h2>完了リスト</h2>
      <div className="todo-container">
        <div className="todo-table">
          <TodoListsTables todoLists={completedTodoLists}></TodoListsTables>
        </div>
      </div>
    </div>
  );
};

export default App;
