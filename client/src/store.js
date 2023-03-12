import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/reducer/userReducer";
import { videoReducer } from "./redux/reducer/videoReducer";
export const server = "http://localhost:8000";
const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
  },
});

export default store;
