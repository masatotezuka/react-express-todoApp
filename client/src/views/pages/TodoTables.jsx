import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ControlledCheckbox } from "../components/CheckboxComponents";
import TableCell from "@mui/material/TableCell";
import { UpdateDialog } from "../components/UpdateDialog";
import moment from "moment";

export const TableCells = React.memo(
  ({ row, deleteTodo, toggleTodoStatus, updateTodo }) => {
    const handleDeleteTodoItem = () => deleteTodo(row.id);
    const deadline = moment(row.deadline).format("YYYY-MM-DD");

    return (
      <React.Fragment>
        <TableCell
          align="center"
          sx={{ paddingRight: "0px", paddingLeft: "0px", width: "5%" }}
        >
          <ControlledCheckbox
            checked={row.isComplete}
            id={row.id}
            toggleTodoStatus={toggleTodoStatus}
          ></ControlledCheckbox>
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          align="center"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          {row.todoTitle}
        </TableCell>
        <TableCell
          align="center"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          {row.description}
        </TableCell>
        <TableCell
          align="center"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          {deadline}
        </TableCell>
        <TableCell
          align="center"
          sx={{ paddingLeft: "10px", paddingRight: "10px", width: "10%" }}
        >
          {
            <React.Fragment>
              <IconButton
                aria-label="delete"
                size="small"
                edge="start"
                sx={{ marginRight: "10px" }}
                onClick={handleDeleteTodoItem}
              >
                <DeleteIcon />
              </IconButton>
              <UpdateDialog
                todoItem={row}
                updateTodo={updateTodo}
              ></UpdateDialog>
            </React.Fragment>
          }
        </TableCell>
      </React.Fragment>
    );
  }
);
