import { createSlice } from '@reduxjs/toolkit';
import RetrieveData from '../RetrieveData';

const bugSlice = createSlice({
  name: 'bug',
  initialState: [],
  reducers: {
    getBugs() {
      RetrieveData();
    },
    createBugs() {},
    updateBugs() {},
    markComplete() {},
  },
});

export default bugSlice.reducer;
export const { getBugs, createBugs, updateBugs, markComplete } =
  bugSlice.actions;
