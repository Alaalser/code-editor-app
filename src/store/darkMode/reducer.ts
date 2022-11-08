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

export const { toggleDarkMode } = darkModeState.actions;
const darkModeReducer = darkModeState.reducer;
export default darkModeReducer;
