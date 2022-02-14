import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TodoContext } from "./TodoBody";

export const ControlledCheckbox = ({ checked, setChecked, id }) => {
  const [todoLists, setTodoLists] = useContext(TodoContext);
  const handleChange = async (event) => {
    console.log(event.target.checked);
    const updateTodoStatus = [{ todoId: id, todoStatus: event.target.checked }];
    const response = await axios.put(
      "http://localhost:8000/api/todoItem",
      updateTodoStatus
    );
    console.log(response.data);
    await setTodoLists(response.data);
  };
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
