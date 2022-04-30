import { useState, useEffect, useCallback } from "react";
import * as todoApi from "../api/todo";

const apiUrl = "http://localhost:8000";

export const useTodo = () => {
  const initialTodoLists = [];
  console.log("hooks");
  const [todoLists, setTodoLists] = useState(initialTodoLists);

  //データ取得
  useEffect(() => {
    const getAllTodo = async () => {
      const response = await todoApi.getAllTodoData();
      setTodoLists(response);
    };
    getAllTodo();
  }, []);

  //ステータス変更
  const toggleTodoStatus = useCallback(async (event, id) => {
    try {
      const updateTodoStatus = [
        { todoId: id, todoStatus: event.target.checked },
      ];
      const response = await todoApi.changeTodoStatus(updateTodoStatus);
      setTodoLists(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //削除
  const deleteTodo = useCallback(
    async (todoId) => {
      try {
        const response = await todoApi.deleteTodo({ id: todoId });
        const deleteId = response.deleteId;
        console.log(todoLists);
        const newTodoLists = todoLists.filter((item) => deleteId !== item.id);
        console.log(newTodoLists);
        setTodoLists(newTodoLists);
      } catch (error) {
        console.log(error);
      }
    },
    [todoLists]
  );

  //新規追加
  const addNewTodo = useCallback(
    async (inputTitle, inputDescription, value) => {
      try {
        const newTodo = [
          {
            title: inputTitle.current.value,
            description: inputDescription.current.value,
            deadline: value,
          },
        ];
        const response = await todoApi.addTodo(newTodo);
        console.log(response.data);
        setTodoLists([...todoLists, response.data]);
      } catch (error) {
        console.log(error);
      }
    },
    [todoLists]
  );

  //編集
  const updateTodo = useCallback(
    async (todoId, updateTitle, updateDescription, value) => {
      try {
        const updateTodoItem = [
          {
            id: todoId,
            title: updateTitle,
            description: updateDescription,
            deadline: value,
          },
        ];
        const response = await todoApi.updateTodo(updateTodoItem);
        setTodoLists(response.data);
      } catch (error) {}
    },
    []
  );

  return { todoLists, deleteTodo, toggleTodoStatus, addNewTodo, updateTodo };
};
