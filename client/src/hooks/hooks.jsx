import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

export const useTodo = () => {
  const initialTodoLists = [
    { id: "", todoTitle: "", desctiption: "", deadline: "" },
  ];
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  //データ取得
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

  //ステータス変更
  const toggleTodoStatus = useCallback(async (event, id) => {
    console.log("toggleStatus");
    console.log(event.target.checked);
    const updateTodoStatus = [{ todoId: id, todoStatus: event.target.checked }];
    const response = await axios.put(
      "http://localhost:8000/api/todoStatus",
      updateTodoStatus
    );
    await setTodoLists(response.data);
  }, []);
  //削除
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
  //新規追加
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

  //編集
  const updateTodo = async (todoId, updateTitle, updateDescription, value) => {
    console.log("updateTodo");
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
