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
          id: Date.now(),
        });
      },
    },
  },
);
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
