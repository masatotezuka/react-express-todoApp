import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import { BasicDatePicker } from "../compnents/DateComponents";

export const TodoAdd = ({ addNewTodo }) => {
  console.log("Add");
  const inputTitle = useRef("");
  const inputDescription = useRef("");
  const [date, setDate] = useState(null);
  const handleTodoItemSubmit = (event) => {
    event.preventDefault();
    addNewTodo(inputTitle, inputDescription, date);
    inputTitle.current.value = "";
    inputDescription.current.value = "";
    setDate(null);
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
          required
        />
        <TextField
          inputRef={inputDescription}
          sx={{ width: "30%" }}
          id="outlined-basic"
          label="詳細を入力してください。"
          variant="outlined"
          name="description"
        />
        <BasicDatePicker date={date} setDate={setDate}></BasicDatePicker>
        <Button variant="contained" type="submit">
          タスクの追加
        </Button>
      </form>
    </div>
  );
};
