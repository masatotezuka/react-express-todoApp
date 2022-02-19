import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TodoContext } from "../components/TodoBody";

export const useTodo = () => {
  // const [todoLists, setTodoLists] = useContext(TodoContext);
  const initialTodoLists = [
    { id: "", todoTitle: "", desctiption: "", deadline: "" },
  ];
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  useEffect(() => {
    const getFetchAllDate = async () => {
      try {
        console.log("useEffect");
        const response = await fetch("http://localhost:8000/api/todoItem");
        const jsondata = await response.json();
        await setTodoLists(jsondata);
      } catch (error) {
        console.log(error);
      }
    };
    getFetchAllDate();
  }, []);

  const toggleTodoStatus = async (event, id) => {
    console.log(event.target.checked);
    const updateTodoStatus = [{ todoId: id, todoStatus: event.target.checked }];
    const response = await axios.put(
      "http://localhost:8000/api/todoStatus",
      updateTodoStatus
    );
    console.log(response.data);
    await setTodoLists(response.data);
  };

  const deleteTodo = async (todoId) => {
    const todoIdData = { id: todoId };
    console.log(todoIdData);
    await axios
      .delete("http://localhost:8000/api/todoItem", {
        data: todoIdData,
      })
      .then((res) => {
        const deleteId = res.data.deleteId;
        const newTodoLists = todoLists.filter((item) => deleteId !== item.id);
        console.log(newTodoLists);
        setTodoLists(newTodoLists);
      });
  };
  const addNewTodo = async (inputTitle, inputDescription, value) => {
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
  const updateTodo = async (todoId, updateTitle, updateDescription, value) => {
    const updateTodoItem = [
      {
        id: todoId,
        title: updateTitle,
        description: updateDescription,
        deadline: value,
      },
    ];
    await axios.put("http://localhost:8000/api/todoItem", updateTodoItem);
  };

  return { todoLists, deleteTodo, toggleTodoStatus, addNewTodo, updateTodo };
};

//データ取得
//追加機能
//編集機能
//削除機能
