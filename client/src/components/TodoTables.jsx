import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ControlledCheckbox } from "./CheckboxComponents";
import { useState, useContext } from "react";
import axios from "axios";
import TableCell from "@mui/material/TableCell";
import { TodoContext } from "./TodoBody";
// import { useDeletetodo } from "./hook";
import { UpdateDialog } from "./UpdateDialog";

export const TableCells = ({ row }) => {
  // const { handleTodoDelete } = useDeletetodo();
  const [checked, setChecked] = useState(row.isComplete);
  console.log(row.isComplete);
  console.log(row);
  const [todoLists, setTodoLists] = useContext(TodoContext);
  const handleTodoDelete = async (todoId) => {
    const todoIdData = { id: todoId };
    await axios
      .delete("http://localhost:8000/api/todoItem", {
        data: todoIdData,
      })
      .then((res) => {
        const deleteId = res.data.deleteId;
        const newTodoLists = todoLists.filter((item) => deleteId !== item.id);
        console.log(newTodoLists);
        setTodoLists(newTodoLists);
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
            <UpdateDialog todoItem={row}></UpdateDialog>
          </React.Fragment>
        }
      </TableCell>
    </React.Fragment>
  );
};
