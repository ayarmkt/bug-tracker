import { createSlice } from '@reduxjs/toolkit';
//import RetrieveData from '../components/RetrieveData';

const initialBugsState = { bugs: [] };

const bugSlice = createSlice({
  name: 'bug',
  initialState: initialBugsState,
  reducers: {
    getBugs() {
      // let sortedData;
      // if (state.bugs.length > 1) {
      //   // sortedData = dispatch(getBugs(DUMMY_DATA));
      //   sortedData = state.bugs.sort((a, b) => a.priority - b.priority);
      // } else {
      //   sortedData = state.bugs;
      // }
      // return sortedData;
      // //console.log(sortedData);
    },

    addNewBugs(state, action) {
      const newBug = action.payload;

      const existingItem = state.bugs.find((bug) => bug.id === newBug.id);

      if (!existingItem) {
        state.bugs.push({
          id: newBug.id,
          title: newBug.title,
          details: newBug.details,
          steps: newBug.steps,
          version: newBug.version,
          priority: newBug.priority,
          assigned: newBug.assigned,
          creator: newBug.creator,
          time: newBug.time,
        });
      }
      console.log(state);
    },
    updateBugs() {},
    markComplete() {},
  },
});

export default bugSlice.reducer;
export const { getBugs, addNewBugs, updateBugs, markComplete } =
  bugSlice.actions;
