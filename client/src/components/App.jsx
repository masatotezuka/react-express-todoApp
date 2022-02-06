import "../App.scss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TodoAdd } from "./TodoAdd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

function BasicTable(props) {
  const todoLists = props.todoLists;
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
              sx={{ paddingRight: "15px", paddingLeft: "15px", width: "60%" }}
            >
              詳細
            </TableCell>
            <TableCell align="center">期日</TableCell>
            <TableCell
              sx={{ paddingLeft: "10px", paddingRight: "10px" }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody size="large">
          {todoLists.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="center"
                sx={{ paddingRight: "0px", paddingLeft: "0px" }}
              >
                <ControlledCheckbox></ControlledCheckbox>
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
                      onClick={(event) => {
                        console.log(row.id);
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const App = () => {
  const initialTodoLists = [{ id: 0, taskName: "" }];
  const [todoLists, setTodoLists] = useState(initialTodoLists);

  useEffect(() => {
    const getTodoLists = async () => {
      try {
        const response = await fetch("http://localhost:8000");
        const jsondata = await response.json();
        console.log(jsondata);
        setTodoLists(jsondata);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoLists();
  }, []);
  console.log(todoLists);
  return (
    <div className="App">
      <h1>Todo アプリ</h1>
      <TodoAdd></TodoAdd>
      <h2>未完了リスト</h2>
      <div className="todo-container">
        <div className="todo-table">
          <BasicTable todoLists={todoLists}></BasicTable>
        </div>
      </div>
      <h2>完了リスト</h2>
      <div className="todo-container">
        <div className="todo-table">
          <BasicTable todoLists={todoLists}></BasicTable>
        </div>
      </div>
    </div>
  );
};

export default App;
