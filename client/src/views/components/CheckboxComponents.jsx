import React from "react";
import Checkbox from "@mui/material/Checkbox";

export const ControlledCheckbox = ({ checked, id, toggleTodoStatus }) => {
  const handleToggleTodoStatus = (event) => toggleTodoStatus(event, id);
  return (
    <Checkbox
      checked={checked}
      onChange={handleToggleTodoStatus}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
