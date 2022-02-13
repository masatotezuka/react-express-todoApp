import { useContext } from "react";
import { axios } from "axios";
import { TodoContext } from "./TodoBody";

export const useDeletetodo = (todoId) => {
  const [todoLists, setTodoLists] = useContext(TodoContext);
  const handleTodoDelete = async () => {
    const todoIdData = { id: todoId };
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
  return { handleTodoDelete };
};
