import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userFile from '../../types/userFile';

export interface FilesState {
  toEqual(expectedState: any): any;
  userFiles: userFile[];
  activeFile: String[];
  editorActiveFile: String | null;
}

export const initialState: FilesState = {
    userFiles: [],
    activeFile: [],
    editorActiveFile: null,
    toEqual: function (expectedState: any) {
        throw new Error('Function not implemented.');
    }
};

const filesReducer = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<userFile[]>) => {
      state.userFiles = action.payload;
      state.activeFile = [];
    },
    addActiveFile: (state, action: PayloadAction<String>) => {
      state.activeFile.push(action.payload);
    },
    removeActiveFile: (state, action: PayloadAction<String>) => {
      state.activeFile = state.activeFile.filter((file) => file !== action.payload);
    },
    setEditorActiveFile: (state, action: PayloadAction<String>) => {
      state.editorActiveFile = action.payload;
    },
    updateFileCode: (state, action: PayloadAction<{ id: string; code: string }>) => {
      const file = state.userFiles.find((file) => file.id === action.payload.id);
      if (file) {
        file.code = action.payload.code;
      }
    },
  },
});

export const { setFile, addActiveFile, removeActiveFile, setEditorActiveFile, updateFileCode } =
  filesReducer.actions;

export default filesReducer.reducer;
