import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoListsTables } from "./TodoLists";
import { useTodo } from "../hooks/hooks";

export const TodoBody = () => {
  const { todoLists, deleteTodo, toggleTodoStatus, addNewTodo, updateTodo } =
    useTodo();

  console.log(todoLists);
  const unCompletedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === false
  );
  const completedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === true
  );

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
