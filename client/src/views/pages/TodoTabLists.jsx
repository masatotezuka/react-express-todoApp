import React from "react";
import { Link } from "react-router-dom";

export const TodoTabLists = (props) => {
  console.log(props.completedLink);
  return (
    <div className="todo-tabs-wrapper">
      <div className="todo-tabs-container">
        <Link to={props.unCompletedLink}>未完了リスト</Link>
        <Link to={props.completedLink}>完了リスト</Link>
      </div>
    </div>
  );
};
