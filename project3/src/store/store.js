import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice"; // por ejemplo

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
export default store;