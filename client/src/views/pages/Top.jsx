import React from "react";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <div className="App">
        <Link to="/uncompleted">タスク一覧へ</Link>
      </div>
    </>
  );
};
