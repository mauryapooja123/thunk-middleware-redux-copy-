import { configureStore } from "@reduxjs/toolkit";
//import thunkMiddleware from "redux-thunk";
import FormData from "./component/pages/FormData";
//import Submit from "./component/reducer/Submit";
//import UserSlice from "./component/reducer/UserSlice";
//import Submit from "./component/reducer/Submit";

// const middlewares = [thunkMiddleware];
// const middlewareEnhancer = applyMiddleware(...middlewares);
// const enhancers = [middlewareEnhancer];

export const store = configureStore({
  reducer: {
    //todos: UserSlice,
    Submit: FormData,
  },
  // ...enhancers,
});
