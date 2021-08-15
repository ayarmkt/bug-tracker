import { createSlice } from '@reduxjs/toolkit';
//import RetrieveData from '../components/RetrieveData';

const initialBugsState = { bugs: [], isUpdatingBug: false, selectedBug: null };

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
      state.isUpdatingBug = false;
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

    updateBugs(state, action) {
      state.isUpdatingBug = true;
      state.selectedBug = action.payload;
      const existingItem = state.bugs.find(
        (bug) => bug.id === state.selectedBug.id
      );
      const existingItemIndex = state.bugs.indexOf(existingItem);
      console.log(existingItem);
      console.log(existingItemIndex);
      console.log(state);

      const bugUpdate = {
        id: existingItem.id,
        title: state.selectedBug.title,
        details: state.selectedBug.details,
        steps: state.selectedBug.steps,
        version: state.selectedBug.version,
        priority: state.selectedBug.priority,
        assigned: state.selectedBug.assigned,
        creator: state.selectedBug.creator,
        time: state.selectedBug.time,
      };

      if (existingItem) {
        state.bugs.splice(existingItemIndex, 1, bugUpdate);
      }
      console.log(state.bugs);
      state.isUpdatingBug = false;
      state.selectedBug = null;
      console.log(state);
    },
    markComplete() {},
    deleteBugs(state, action) {
      console.log(state);
      state.selectedBug = action.payload;
      const existingItem = state.bugs.find(
        (bug) => bug.id === state.selectedBug.id
      );
      const existingItemIndex = state.bugs.indexOf(existingItem);
      console.log(existingItem);
      console.log(existingItemIndex);

      if (existingItem) {
        state.bugs.splice(existingItemIndex, 1);
      }
      console.log(state.bugs);
      console.log('removed item');
      state.selectedBug = null;
      console.log(state);
    },
    storeSelectedBug(state, action) {
      state.selectedBug = action.payload;
      console.log(state.selectedBug);
      console.log(state);
    },
  },
});

export default bugSlice.reducer;
export const {
  getBugs,
  addNewBugs,
  updateBugs,
  markComplete,
  deleteBugs,
  storeSelectedBug,
} = bugSlice.actions;
