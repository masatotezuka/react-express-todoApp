import React from "react";
import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";

function BasicTable(props) {
  const todoLists = props.todoLists;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size="large">
        <TableHead>
          <TableRow>
            <TableCell align="center">タスク</TableCell>
            <TableCell align="center">詳細</TableCell>
            <TableCell align="center">期日</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody size="large">
          {todoLists.map((row) => (
            <TableRow
              key={row.taskName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {" "}
              <TableCell component="th" scope="row" align="center">
                {row.taskName}
              </TableCell>
              <TableCell align="center">{row.taskContent}</TableCell>
              <TableCell align="center">{row.deadline}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell>
                {
                  <React.Fragment>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      edge="start"
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

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/api");
    return console.log(response.config);
  };
  fetchData();

  useEffect(() => {
    const getTodoLists = async () => {
      try {
        const response = await fetch("http://localhost:8000/api");
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
      <TextField
        sx={{ width: "30%" }}
        id="outlined-basic"
        label="タスクを入力してください。"
        variant="outlined"
      />
      {/* https://qiita.com/cieloazul310/items/d630da98439c89d773ba */}
      {/* {console.log(todoLists)}
      {todoLists.map((todo) => {
        return <li key={todo.id}>{todo.taskName}</li>;
      })} */}
      <div className="todo-container">
        <div className="todo-table">
          <BasicTable todoLists={todoLists}></BasicTable>
        </div>
      </div>
    </div>
  );
};

export default App;
