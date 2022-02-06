import React from "react";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useState, useRef } from "react";
import axios from "axios";

function BasicDatePicker() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="期限日"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} className="date-button" />
        )}
      />
    </LocalizationProvider>
  );
}

export const TodoAdd = () => {
  const [todoTitle, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [todoDescription, setDescription] = useState("");
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleTodoItemSubmit = async (event) => {
    event.preventDefault();
    const newTodo = [
      {
        title: todoTitle,
        description: todoDescription,
        // date: this.deadline,
      },
    ];
    console.log(newTodo);
    await axios.post("http://localhost:8000/api/todoItem", newTodo);
    // .then((res) => {
    //   console.log(res.data);
    //   return res.data;
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  return (
    <div>
      <form className="input-box" onSubmit={handleTodoItemSubmit}>
        <TextField
          sx={{ width: "25%", marginRight: "10px" }}
          id="outlined-basic"
          label="タスクを入力してください。"
          variant="outlined"
          value={todoTitle}
          name="todoTitle"
          onChange={handleTitleChange}
        />
        <TextField
          sx={{ width: "30%" }}
          id="outlined-basic"
          label="詳細を入力してください。"
          variant="outlined"
          value={todoDescription}
          // ref={formRef}
          name="description"
          onChange={handleDescriptionChange}
        />
        <BasicDatePicker></BasicDatePicker>
        <Button variant="contained" type="submit">
          タスクの追加
        </Button>
      </form>
    </div>
  );
};
