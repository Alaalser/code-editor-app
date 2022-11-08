/* eslint-disable jest/valid-expect */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './reducer';
import filesReducer, {setFile } from './reducer';

describe('files reducer', () => {
  test('should return the initial state', () => {
    expect(filesReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });  
  test('should handle setUserFiles', () => {
    const userFiles = [
      {
        id: '1',
        name: 'test',
        relativePath: 'test',
        code: 'test',
        extension: 'test',
      },
    ];
    const expectedState = {
      ...initialState,
      activeFile: [],
      userFiles,
    };
    expect(filesReducer(initialState, setFile(userFiles))).toEqual(expectedState);
  });
});
