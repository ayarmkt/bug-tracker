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
      const selectedBug = action.payload;
      const existingItem = state.bugs.find((bug) => bug.id === selectedBug.id);
      const existingItemIndex = state.bugs.indexOf(existingItem);
      console.log(existingItem);
      console.log(existingItemIndex);

      const bugUpdate = {
        id: existingItem.id,
        title: selectedBug.title,
        details: selectedBug.details,
        steps: selectedBug.steps,
        version: selectedBug.version,
        priority: selectedBug.priority,
        assigned: selectedBug.assigned,
        creator: selectedBug.creator,
        time: selectedBug.time,
      };

      if (existingItem) {
        state.bugs.splice(existingItemIndex, 1, bugUpdate);
      }
      console.log(state.bugs);
      state.isUpdatingBug = false;
    },
    markComplete() {},
    deleteBugs(state, action) {
      const selectedBug = action.payload;
      const existingItem = state.bugs.find((bug) => bug.id === selectedBug.id);
      const existingItemIndex = state.bugs.indexOf(existingItem);
      console.log(existingItem);
      console.log(existingItemIndex);

      if (existingItem) {
        state.bugs.splice(existingItemIndex, 1);
      }
      console.log(state.bugs);
      console.log('removed item');
    },
    storeSelectedBug(state, action) {
      state.selectedBug = action.payload;
      console.log(state.selectedBug);
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

// export const getBugData = () => {
//   const fetchData = async () => {
//     const response = await fetch(
//       'https://bug-tracker-auth-development-default-rtdb.europe-west1.firebasedatabase.app/bugs.json'
//     );

//     if (!response.ok) {
//       throw new Error('error occurred');
//     }

//     const data = await response.json();
//     return data;
//   };

//   try {
//     fetchData();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const storeBugData = (bugsData) => {
//   const fetchData = async () => {
//     const response = await fetch(
//       'https://bug-tracker-auth-development-default-rtdb.europe-west1.firebasedatabase.app/bugs.json',
//       { method: 'PUT', body: JSON.stringify(bugsData) }
//     );

//     if (!response.ok) {
//       throw new Error('error occurred');
//     }

//     const data = await response.json();
//     console.log(data);
//   };

//   try {
//     fetchData();
//   } catch (error) {
//     console.log(error);
//   }
// };
