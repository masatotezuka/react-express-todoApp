import React from "react";
import "../App.scss";
import { useContext } from "react";
import { CountContext } from "./Sample";

export const Second = () => {
  const [count, setCount] = useContext(CountContext);
  const increment = () => {
    setCount((prenumber) => prenumber + 1);
  };

  return (
    <div>
      <p>second: 現在のカウント:{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};
