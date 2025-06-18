import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('http://localhost:8080/api/tasks');
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post('http://localhost:8080/api/tasks', task);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await axios.put(`http://localhost:8080/api/tasks/${task.id}`, task);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await axios.delete(`http://localhost:8080/api/tasks/${taskId}`);
  return taskId;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export const selectTasks = (state) => state.tasks.tasks;
export default tasksSlice.reducer;
