import React from "react";
// import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoListsTables } from "./TodoLists";
import { useTodo } from "../hooks/hooks";
// import { TodoContext } from "./TodoProvider";

export const TodoContext = createContext();

export const TodoBody = () => {
  const { todoLists, deleteTodo, toggleTodoStatus, addNewTodo, updateTodo } =
    useTodo();
  // const initialTodoLists = [
  //   { id: "", todoTitle: "", desctiption: "", deadline: "" },
  // ];
  // const [todoLists, setTodoLists] = useState(initialTodoLists);

  console.log(todoLists);
  const unCompletedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === false
  );
  const completedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === true
  );

  return (
    <React.Fragment>
      {/* <TodoContext.Provider value={[todoLists]}> */}
      <TodoAdd addNewTodo={addNewTodo}></TodoAdd>
      <h2>未完了リスト</h2>
      <div className="todo-container">
        <div className="todo-table">
          <TodoListsTables
            todoLists={unCompletedTodoLists}
            deleteTodo={deleteTodo}
            toggleTodoStatus={toggleTodoStatus}
            updateTodo={updateTodo}
          ></TodoListsTables>
        </div>
      </div>
      <h2>完了リスト</h2>
      <div className="todo-container">
        <div className="todo-table">
          <TodoListsTables
            todoLists={completedTodoLists}
            deleteTodo={deleteTodo}
            toggleTodoStatus={toggleTodoStatus}
            updateTodo={updateTodo}
          ></TodoListsTables>
        </div>
      </div>
      {/* </TodoContext.Provider> */}
    </React.Fragment>
  );
};
