import React from "react";
import Checkbox from "@mui/material/Checkbox";

export const ControlledCheckbox = ({ checked, id, toggleTodoStatus }) => {
  const handleToggleTodostatus = (event) => toggleTodoStatus(event, id);
  return (
    <Checkbox
      checked={checked}
      onChange={handleToggleTodostatus}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
