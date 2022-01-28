import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const initialTodoLists = [{ id: 0, taskName: "" }];
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  useEffect(() => {
    const getTodoLists = async () => {
      try {
        const response = await fetch("http://localhost:8000/api");
        const jsondata = await response.json();
        console.log(jsondata);
        setTodoLists(jsondata);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoLists();
  }, []);
  console.log(todoLists);
  return (
    <div className="App">
      <h1>Hello</h1>
      {console.log(todoLists)}
      {todoLists.map((todo) => {
        return <li key={todo.id}>{todo.taskName}</li>;
      })}
    </div>
  );
};

export default App;
