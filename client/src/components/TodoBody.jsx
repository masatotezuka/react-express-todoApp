import React from "react";
// import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoListsTables } from "./TodoLists";
// import { TodoContext } from "./TodoProvider";

export const TodoContext = createContext();

export const TodoBody = () => {
  const initialTodoLists = [
    { id: "", todoTitle: "", desctiption: "", deadline: "" },
  ];
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  console.log(todoLists);
  const unCompletedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === false
  );
  const completedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === true
  );
  // const value = { unCompletedTodoLists, completedTodoLists, setTodoLists };
  useEffect(() => {
    const getTodoLists = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/todoItem");
        const jsondata = await response.json();
        await setTodoLists(jsondata);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoLists();
  }, []);
  return (
    <React.Fragment>
      <TodoContext.Provider value={[todoLists, setTodoLists]}>
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
      </TodoContext.Provider>
    </React.Fragment>
  );
};
