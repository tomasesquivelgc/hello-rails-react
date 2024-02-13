import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:3000/api/greetings/pick',
      );
      const endData = response.data.message;
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  greetingItem: 'Loading...',
  error: '',
};

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      state.greetingItem = action.payload;
      
    });
    builder.addCase(getGreetings.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default greetingsSlice.reducer;