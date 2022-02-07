import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import { BasicDatePicker } from "./DateComponents";
import axios from "axios";

export const TodoAdd = () => {
  const [todoTitle, setTitle] = useState("");
  const [value, setValue] = useState(null);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [todoDescription, setDescription] = useState("");
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleTodoItemSubmit = async (event) => {
    // event.preventDefault();
    const newTodo = [
      {
        title: todoTitle,
        description: todoDescription,
        deadline: value,
      },
    ];
    await axios.post("http://localhost:8000/api/todoItem", newTodo);
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
          name="description"
          onChange={handleDescriptionChange}
        />
        <BasicDatePicker value={value} setValue={setValue}></BasicDatePicker>
        <Button variant="contained" type="submit">
          タスクの追加
        </Button>
      </form>
    </div>
  );
};
