import React from "react";
import "../App.scss";
import { First } from "./First";
import { useState, createContext } from "react";

export const CountContext = createContext();

export const Sample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Sample</p>
      <CountContext.Provider value={[count, setCount]}>
        <First></First>
      </CountContext.Provider>
    </div>
  );
};
