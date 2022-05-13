import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submit: {},
};

export const FormSubmit = createSlice({
  name: "submit",
  initialState,
  reducers: {
    userRegister: (state, { payload }) => {
      state.submit = payload;
    },
  },
});

export const { userRegister } = FormSubmit.actions;

export default FormSubmit.reducer;
