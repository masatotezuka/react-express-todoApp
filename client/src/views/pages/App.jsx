import "../../App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UncompletedTodo } from "./UncompletedTodo";
import { CompletedTodo } from "./CompletedTodo";
import { Top } from "./Top";
import { NotFound } from "./NotFound";
import { ErrorBoundary } from "../../ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
          <h1>Todo アプリ</h1>
          <Routes>
            <Route path="/" element={<Top />}></Route>
            <Route path="/uncompleted" element={<UncompletedTodo />}></Route>
            <Route path="/completed" element={<CompletedTodo />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
