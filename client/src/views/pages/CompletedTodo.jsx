import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoLists } from "./TodoLists";
import { TodoTabLists } from "./TodoTabLists";
import { Link } from "react-router-dom";

export const CompletedTodo = React.memo(
  ({
    completedTodoLists,
    deleteTodo,
    toggleTodoStatus,
    addNewTodo,
    updateTodo,
  }) => {
    console.log("completedList");
    return (
      <React.Fragment>
        <TodoAdd addNewTodo={addNewTodo}></TodoAdd>
        <TodoTabLists
          completedLink="/completed"
          unCompletedLink="/uncompleted"
        ></TodoTabLists>
        <div className="todo-container">
          <div className="todo-table">
            <TodoLists
              todoLists={completedTodoLists}
              deleteTodo={deleteTodo}
              toggleTodoStatus={toggleTodoStatus}
              updateTodo={updateTodo}
            ></TodoLists>
          </div>
        </div>
        <Link to="/">トップページに戻る</Link>
      </React.Fragment>
    );
  }
);
