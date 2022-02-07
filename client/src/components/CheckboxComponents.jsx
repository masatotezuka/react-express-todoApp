import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export const ControlledCheckbox = ({ checked, setChecked, id }) => {
  // const [isCompleted, setCompleted] = useState(false);
  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
    console.log(checked);
    console.log(id);
    console.log(event.target.checked);
    // setCompleted(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
