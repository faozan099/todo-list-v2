import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Menambah Todo
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    // Menghapus Todo
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // Update todo
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    // completed
    completedTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completedTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;