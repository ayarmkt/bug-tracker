import {createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name: 'auth', initialState: {admin: false, loggedIn: false}, reducers:{
        login(state, action){
            const {name, password} = action.payload;
            state.loggedIn = true;
            state.admin = true;
        },
        logout(state){
            state.loggedIn = false;
            state.admin = false;
        },
        createUser(state, action){},
    }
})

export default authSlice.reducer;
export const {login, logout, createUser} = authSlice.actions;
