import React from "react";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { BasicDatePicker } from "./DateComponents";

export const UpdateDialog = ({ todoItem, updateTodo }) => {
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

  const handleUpdateTodoSubmit = () =>
    updateTodo(todoItem.id, updateTitle, updateDescription, value);

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
              required
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
