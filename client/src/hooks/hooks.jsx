import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

const apiUrl = "http://localhost:8000";

export const useTodo = () => {
  const initialTodoLists = [];
  console.log("hooks");
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  //データ取得
  useEffect(() => {
    console.log("get");
    const getFetchAllDate = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/todoItem`);
        const jsonData = await response.json();
        setTodoLists(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    getFetchAllDate();
  }, []);

  //ステータス変更
  const toggleTodoStatus = useCallback(async (event, id) => {
    const updateTodoStatus = [{ todoId: id, todoStatus: event.target.checked }];
    const response = await axios.put(
      `${apiUrl}/api/todoItem/todoStatus`,
      updateTodoStatus
    );
    setTodoLists(response.data);
  }, []);

  //削除
  const deleteTodo = useCallback(
    async (todoId) => {
      const todoIdData = { id: todoId };
      await axios
        .delete(`${apiUrl}/api/todoItem`, {
          data: todoIdData,
        })
        .then((res) => {
          const deleteId = res.data.deleteId;
          const newTodoLists = todoLists.filter((item) => deleteId !== item.id);
          setTodoLists(newTodoLists);
        });
    },
    [todoLists]
  );
  //新規追加
  const addNewTodo = useCallback(
    async (inputTitle, inputDescription, value) => {
      const newTodo = [
        {
          title: inputTitle.current.value,
          description: inputDescription.current.value,
          deadline: value,
        },
      ];
      await axios.post(`${apiUrl}/api/todoItem`, newTodo);
    },
    []
  );

  //編集
  const updateTodo = useCallback(
    async (todoId, updateTitle, updateDescription, value) => {
      const updateTodoItem = [
        {
          id: todoId,
          title: updateTitle,
          description: updateDescription,
          deadline: value,
        },
      ];
      const response = await axios.put(
        `${apiUrl}/api/todoItem`,
        updateTodoItem
      );
      setTodoLists(response.data);
    },
    []
  );

  return { todoLists, deleteTodo, toggleTodoStatus, addNewTodo, updateTodo };
};
