import { configureStore } from '@reduxjs/toolkit';
import { checkStatus } from './categories/categories';

const store = configureStore(
  {
    reducer: {
      categories: checkStatus,
    },
  },

);

export default store;
