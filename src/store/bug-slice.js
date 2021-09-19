import { createSlice } from '@reduxjs/toolkit';

const initialBugsState = {
  bugs: [],
  isUpdatingBug: false,
  selectedBug: null,
  bugsChanged: false,
};

const bugSlice = createSlice({
  name: 'bug',
  initialState: initialBugsState,
  reducers: {
    getBugs(state, action) {
      state.bugsChanged = false;
      const bugsList = action.payload;
      state.bugs = bugsList;
    },

    addNewBugs(state, action) {
      state.isUpdatingBug = false;
      state.bugsChanged = true;
      const newBug = action.payload;

      const existingItem = state.bugs.find((bug) => bug.id === newBug.id);

      if (!existingItem) {
        state.bugs.push({
          id: newBug.id,
          title: newBug.title,
          details: newBug.details,
          steps: newBug.steps,
          status: newBug.status,
          priority: newBug.priority,
          assigned: newBug.assigned,
          creator: newBug.creator,
          time: newBug.time,
        });
      }
    },

    updateBugs(state, action) {
      state.isUpdatingBug = true;
      state.bugsChanged = true;
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
        status: state.selectedBug.status,
        priority: state.selectedBug.priority,
        assigned: state.selectedBug.assigned,
        creator: state.selectedBug.creator,
        time: new Date().getTime(),
      };

      if (existingItem) {
        state.bugs.splice(existingItemIndex, 1, bugUpdate);
      }

      state.isUpdatingBug = false;
      state.selectedBug = null;
    },

    deleteBugs(state, action) {
      state.bugsChanged = true;
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
  addNewBugs,
  updateBugs,
  deleteBugs,
  storeSelectedBug,
} = bugSlice.actions;
