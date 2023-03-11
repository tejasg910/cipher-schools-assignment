import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/reducer/userReducer";
export const server = "http://localhost:8000";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
