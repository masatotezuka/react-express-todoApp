import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import { BasicDatePicker } from "./DateComponents";
import axios from "axios";

export const TodoAdd = () => {
  const inputTitle = useRef("");
  const inputDescription = useRef("");
  const [value, setValue] = useState(null);
  const handleTodoItemSubmit = async (event) => {
    event.preventDefault();
    console.log(inputTitle.current.value);
    const newTodo = [
      {
        title: inputTitle.current.value,
        description: inputDescription.current.value,
        deadline: value,
      },
    ];
    await axios.post("http://localhost:8000/api/todoItem", newTodo);
  };
  return (
    <div>
      <form className="input-box" onSubmit={handleTodoItemSubmit}>
        <TextField
          inputRef={inputTitle}
          sx={{ width: "25%", marginRight: "10px" }}
          id="outlined-basic"
          label="タスクを入力してください。"
          variant="outlined"
          name="todoTitle"
        />
        <TextField
          inputRef={inputDescription}
          sx={{ width: "30%" }}
          id="outlined-basic"
          label="詳細を入力してください。"
          variant="outlined"
          name="description"
        />
        <BasicDatePicker value={value} setValue={setValue}></BasicDatePicker>
        <Button variant="contained" type="submit">
          タスクの追加
        </Button>
      </form>
    </div>
  );
};
