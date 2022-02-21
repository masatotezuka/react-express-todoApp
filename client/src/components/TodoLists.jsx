import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableCells } from "./TodoTables";

export const TodoListsTables = React.memo(
  ({ todoLists, deleteTodo, toggleTodoStatus, updateTodo }) => {
    console.log(todoLists);
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="large">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ paddingRight: "0px", paddingLeft: "0px" }}
              ></TableCell>
              <TableCell align="center" sx={{ width: "20%" }}>
                タスク
              </TableCell>
              <TableCell
                align="center"
                sx={{ paddingRight: "15px", paddingLeft: "15px", width: "40%" }}
              >
                詳細
              </TableCell>
              <TableCell align="center">期日</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody size="large">
            {todoLists.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCells
                  row={row}
                  deleteTodo={deleteTodo}
                  toggleTodoStatus={toggleTodoStatus}
                  updateTodo={updateTodo}
                ></TableCells>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);
