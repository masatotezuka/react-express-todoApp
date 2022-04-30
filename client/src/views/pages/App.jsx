import "../../App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UncompletedTodo } from "./UncompletedTodo";
import { CompletedTodo } from "./CompletedTodo";
import { Top } from "./Top";
import { NotFound } from "./NotFound";
import { useTodo } from "../../hooks/hooks";
import { ErrorBoundary } from "../../ErrorBoundary";

const App = () => {
  const { todoLists, deleteTodo, toggleTodoStatus, addNewTodo, updateTodo } =
    useTodo();
  const unCompletedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === false
  );
  const completedTodoLists = todoLists.filter(
    (todoList) => todoList.isComplete === true
  );
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
          <h1>Todo アプリ</h1>
          <Routes>
            <Route path="/" element={<Top />}></Route>
            <Route
              path="/uncompleted"
              element={
                <UncompletedTodo
                  unCompletedTodoLists={unCompletedTodoLists}
                  deleteTodo={deleteTodo}
                  toggleTodoStatus={toggleTodoStatus}
                  addNewTodo={addNewTodo}
                  updateTodo={updateTodo}
                />
              }
            ></Route>
            <Route
              path="/completed"
              element={
                <CompletedTodo
                  completedTodoLists={completedTodoLists}
                  deleteTodo={deleteTodo}
                  toggleTodoStatus={toggleTodoStatus}
                  addNewTodo={addNewTodo}
                  updateTodo={updateTodo}
                />
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
