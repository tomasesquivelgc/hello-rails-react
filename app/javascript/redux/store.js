import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './GreetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;