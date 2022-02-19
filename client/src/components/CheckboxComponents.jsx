import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TodoContext } from "./TodoBody";
import { useTodo } from "../hooks/hooks";

export const ControlledCheckbox = ({ checked, setChecked, id }) => {
  // const [todoLists, setTodoLists] = useContext(TodoContext);
  const { toggleTodoStatus } = useTodo();
  const handleToggleTodostatus = (event) => toggleTodoStatus(event, id);

  return (
    <Checkbox
      checked={checked}
      onChange={handleToggleTodostatus}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
