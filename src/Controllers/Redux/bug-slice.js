import {createSlice} from '@reduxjs/toolkit'
import RetrieveData from '../RetrieveData';

const bugSlice=createSlice({
    name: 'bug', initialState: [], reducers:{
        getBugs(state){
            RetrieveData();
        },
        createBugs(state, action){
         
        },
        updateBugs(state, action){},
        markComplete(state, action){},
    }
})

export default bugSlice.reducer;
export const {getBugs, createBugs, updateBugs, markComplete} = bugSlice.actions;