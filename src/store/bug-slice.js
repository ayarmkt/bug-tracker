import { createSlice } from '@reduxjs/toolkit';

const initialBugsState = { bugs: [], isUpdatingBug: false, selectedBug: null };

const bugSlice = createSlice({
  name: 'bug',
  initialState: initialBugsState,
  reducers: {
    getBugs() {
      //sort bugs here
    },

    // addNewBugs(state, action) {
    //   state.isUpdatingBug = false;
    //   const newBug = action.payload;

    //   const existingItem = state.bugs.find((bug) => bug.id === newBug.id);

    //   if (!existingItem) {
    //     state.bugs.push({
    //       id: newBug.id,
    //       title: newBug.title,
    //       details: newBug.details,
    //       steps: newBug.steps,
    //       version: newBug.version,
    //       priority: newBug.priority,
    //       assigned: newBug.assigned,
    //       creator: newBug.creator,
    //       time: newBug.time,
    //     });
    //   }
    //},

    updateBugs(state, action) {
      state.isUpdatingBug = true;
      state.selectedBug = action.payload;
      const existingItem = state.bugs.find(
        (bug) => bug.id === state.selectedBug.id
      );
      const existingItemIndex = state.bugs.indexOf(existingItem);

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

      state.isUpdatingBug = false;
      state.selectedBug = null;
    },
    markComplete() {},
    deleteBugs(state, action) {
      state.selectedBug = action.payload;
      const existingItem = state.bugs.find(
        (bug) => bug.id === state.selectedBug.id
      );
      const existingItemIndex = state.bugs.indexOf(existingItem);

      if (existingItem) {
        state.bugs.splice(existingItemIndex, 1);
      }

      state.selectedBug = null;
    },
    storeSelectedBug(state, action) {
      state.selectedBug = action.payload;
    },
  },
});

export default bugSlice.reducer;
export const {
  getBugs,
  //addNewBugs,
  updateBugs,
  markComplete,
  deleteBugs,
  storeSelectedBug,
} = bugSlice.actions;
