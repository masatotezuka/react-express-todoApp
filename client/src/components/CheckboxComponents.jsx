import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TodoContext } from "./TodoBody";

export const ControlledCheckbox = ({ checked, setChecked, id }) => {
  // const [isCompleted, setCompleted] = useState(false);
  // console.log(checked);
  const [todoLists, setTodoLists] = useContext(TodoContext);
  // useEffect(() => {
  const handleChange = async (event) => {
    console.log(event.target.checked);
    const updateTodoStatus = [{ todoId: id, todoStatus: event.target.checked }];
    const response = await axios.put(
      "http://localhost:8000/api/todoItem",
      updateTodoStatus
    );
    console.log(response.data);
    // const jsondata = response.data;
    // console.log(jsondata);
    await setTodoLists(response.data);
    await setChecked(event.target.checked);
  };
  //   handleChange();
  // }, []);
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
