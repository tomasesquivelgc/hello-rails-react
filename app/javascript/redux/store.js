import { configureStore } from '@reduxjs/toolkit';
import GreetingsReducer from './GreetingsSlice';

const store = configureStore({
  reducer: {
    greetings: GreetingsReducer,
  },
});

export default store;