import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ControlledCheckbox } from "./CheckboxComponents";
import { useState } from "react";
import axios from "axios";
import TableCell from "@mui/material/TableCell";

export const TableCells = ({ row }) => {
  const [checked, setChecked] = useState(false);
  const handleTodoDelete = async (todoId) => {
    console.log(typeof todoId);
    const todoIdData = { id: todoId };
    console.log(`delete${todoIdData}`);
    await axios.delete("http://localhost:8000/api/todoItem", {
      data: { id: todoId },
    });
  };
  return (
    <React.Fragment>
      <TableCell
        align="center"
        sx={{ paddingRight: "0px", paddingLeft: "0px" }}
      >
        <ControlledCheckbox
          checked={checked}
          setChecked={setChecked}
          id={row.id}
        ></ControlledCheckbox>
      </TableCell>
      <TableCell component="th" scope="row" align="center">
        {row.todoTitle}
      </TableCell>
      <TableCell align="center">{row.description}</TableCell>
      <TableCell align="center">{row.deadline}</TableCell>
      <TableCell
        align="center"
        sx={{ paddingLeft: "10px", paddingRight: "10px", width: "20%" }}
      >
        {
          <React.Fragment>
            <IconButton
              aria-label="delete"
              size="small"
              edge="start"
              sx={{ marginRight: "10px" }}
              onClick={() => {
                handleTodoDelete(row.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="update"
              size="small"
              edge="start"
              onClick={(event) => {
                console.log(row.id);
              }}
            >
              <CreateIcon />
            </IconButton>
          </React.Fragment>
        }
      </TableCell>
    </React.Fragment>
  );
};
