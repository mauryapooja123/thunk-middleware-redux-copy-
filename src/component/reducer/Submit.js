import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";

// export const getData = createAsyncThunk () => {
//   await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };
// export const fetchTodos = createAsyncThunk("todos/getTodos", async () => {
//   const response = await axios
//     .get("https://jsonplaceholder.typicode.com/todos/")
//     .then((data) => data.json());

//   return response;
// });
export const fetchTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  return await response.json();
});
// console.log(response, "l;;;;;;;;;");
export const Submit = createSlice({
  name: "todos",
  initialState: {
    list: [],
    // loading: "idle" | "pending" | "succeeded" | "failed",
  },

  reducers: {
    [fetchTodos]: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export default Submit.reducer;
