import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice(
  {
    name: 'categories',
    initialState,
    reducers: {
      checkStatus(state) {
        state.push({
          title: 'under construction',
        });
      },
    },
  },
);
export const { checkStatus } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
