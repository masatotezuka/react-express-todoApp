import React from "react";
import { useState, useContext } from "react";
import { TodoContext } from "./TodoBody";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BasicDatePicker } from "./DateComponents";
import axios from "axios";

export const UpdateDialog = ({ todoItem }) => {
  const [todoLists, setTodoLists] = useContext(TodoContext);

  const [updateTitle, setTitle] = useState(todoItem.todoTitle);
  const [updateDescription, setDescription] = useState(todoItem.description);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(todoItem.deadline);
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateTodoSubmit = async () => {
    const updateTodo = [
      {
        id: todoItem.id,
        title: updateTitle,
        description: updateDescription,
        deadline: value,
      },
    ];
    await axios.put("http://localhost:8000/api/todoItem", updateTodo);
  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="update"
        size="small"
        edge="start"
        onClick={handleClickOpen}
      >
        <CreateIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        {/* <div className="dialog-box"> */}
        <DialogTitle>Todoの修正</DialogTitle>
        <form onSubmit={handleUpdateTodoSubmit}>
          <DialogContent>
            <TextField
              value={updateTitle}
              // onChange={}
              autoFocus
              margin="dense"
              id="name"
              label="タスク"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChangeTitle}
            />
            <TextField
              value={updateDescription}
              autoFocus
              margin="dense"
              id="name"
              label="詳細"
              type="text"
              fullWidth
              variant="standard"
              sx={{ marginBottom: "30px" }}
              onChange={handleChangeDescription}
            />
            <BasicDatePicker
              value={value}
              setValue={setValue}
            ></BasicDatePicker>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>中止</Button>
            <Button type="submit">保存</Button>
          </DialogActions>
        </form>
        {/* </div> */}
      </Dialog>
    </React.Fragment>
  );
};
