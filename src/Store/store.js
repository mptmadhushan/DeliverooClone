// store.js
import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './slices/foodSlice'; 
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    food: foodReducer,
    auth: authReducer, 
  },
});

export default store;
