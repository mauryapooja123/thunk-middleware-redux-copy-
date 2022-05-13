import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const gettodos = createAsyncThunk("todos/gettodos", async () => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return res.data;
// });
export const gettodos = createAsyncThunk("posts/gettodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (data) => data.json()
  );
  return res;
});

const UserSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    //status: null,
    loading: false,
  },
  extraReducers: {
    [gettodos.pending]: (state) => {
      state.loading = true;
    },
    [gettodos.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    },

    [gettodos.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// export const { pending, fulfilled, rejected } = UserSlice.actions;

export default UserSlice.reducer;
