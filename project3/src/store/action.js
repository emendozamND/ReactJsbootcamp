import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTask, setLoading } from "./taskSlice";

export const saveTaskToServer = createAsyncThunk(
    "tasks/saveTaskToServer",
    async (task, { dispatch }) => {
        console.log(task, "task>>>>>>>");

        dispatch(setLoading(true));

        // Simulamos delay del servidor
        await new Promise((resolve) => setTimeout(resolve, 2000));

        dispatch(addTask(task));
        dispatch(setLoading(false));
    }
);
