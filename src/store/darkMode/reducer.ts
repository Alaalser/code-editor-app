import { createSlice } from '@reduxjs/toolkit';

export const initialState = false;

const darkModeState = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      return !state;
    },
  },
});

const darkModeReducer = darkModeState.reducer;
export const { toggleDarkMode } = darkModeState.actions;
export default darkModeReducer
