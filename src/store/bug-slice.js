import { createSlice } from '@reduxjs/toolkit';
//import RetrieveData from '../components/RetrieveData';

// const DUMMY_DATA = [
//   {
//     id: 23456789,
//     name: 'Crashed on Load',
//     details: 'Crashed after 3 seconds',
//     steps: 'Open application and it will crash',
//     version: 'V2.0',
//     priority: 1,
//     assigned: 'Aya',
//     creator: 'Joe',
//     time: '23:30',
//   },
//   {
//     id: 23456786,
//     name: 'cannot enter again',
//     details: 'Crashed after 3 seconds',
//     steps: 'Open application and it will crash',
//     version: 'V2.0',
//     priority: 5,
//     assigned: 'Tom',
//     creator: 'Joe',
//     time: '23:38',
//   },
//   {
//     id: 23456787,
//     name: 'cannot enter ',
//     details: 'Crashed after 3 seconds',
//     steps: 'Open application and it will crash',
//     version: 'V2.0',
//     priority: 3,
//     assigned: 'Aya',
//     creator: 'Joe',
//     time: '23:38',
//   },
// ];

const bugSlice = createSlice({
  name: 'bug',
  initialState: [],
  reducers: {
    getBugs() {
      //RetrieveData();
    },
    createBugs() {},
    updateBugs() {},
    markComplete() {},
  },
});

export default bugSlice.reducer;
export const { getBugs, createBugs, updateBugs, markComplete } =
  bugSlice.actions;
