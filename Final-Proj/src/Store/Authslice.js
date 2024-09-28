 import createSlice from '@reduxjs/toolkit';

 const initialState ={ 
    status:false,
    userData:null,
 }

 const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
// reducer consist of callbackfunctions

// reducers n0 1
login:(state,action) => {
    state.status = true;
    state.userdata = action.payload.userdata
},


// reducers n0 2
logout: (state,action) => {
    state.status = false;
    state.userdata = null;
}

    },
 });

 export const{login,logout} =authSlice.actions;
 export default authSlice.reducers;