import axios from "axios";

const apiUrl = "http://localhost:8000";

export const getAllTodoData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/todoItem`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeTodoStatus = async (updateTodoStatus) => {
  try {
    const response = await axios.put(
      `${apiUrl}/api/todoItem/todoStatus`,
      updateTodoStatus
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoIdData) => {
  try {
    const response = await axios.delete(`${apiUrl}/api/todoItem`, {
      data: todoIdData,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await axios.post(`${apiUrl}/api/todoItem`, newTodo);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (updateTodo) => {
  try {
    const response = await axios.put(`${apiUrl}/api/todoItem`, updateTodo);
    return response;
  } catch (error) {
    console.log(error);
  }
};
