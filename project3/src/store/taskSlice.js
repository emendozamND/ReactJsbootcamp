import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk: simula guardar la tarea en el servidor
export const saveTaskToServer = createAsyncThunk(
  "tasks/saveTaskToServer",
  async (taskText, { dispatch }) => {
    dispatch(setLoading(true));
    // Simular delay de servidor (2s)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Una vez "guardado", la agregamos al estado
    dispatch(addTask(taskText));
    dispatch(setLoading(false));
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addTask, setLoading } = taskSlice.actions;
export default taskSlice.reducer;