import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoLists } from "./TodoLists";
import { TodoTabLists } from "./TodoTabLists";
import { Link } from "react-router-dom";

export const UncompletedTodo = React.memo(
  ({
    unCompletedTodoLists,
    deleteTodo,
    toggleTodoStatus,
    addNewTodo,
    updateTodo,
  }) => {
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
              todoLists={unCompletedTodoLists}
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
