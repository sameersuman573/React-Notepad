import { createSlice } from "@reduxjs/toolkit";
// It needs
// 1. initial state
// 2. reducers


// slice is done to track authentication of user from storage



// in initial state we ask from store is the user authenticated
const initialState = {
  status: false,
  // now user is not authenticated as status is false
  userData: null,
  // It contains the user details 
};





const authSlice = createSlice({
  name: "auth",
  initialState,
  //  reducers play a crucial role in managing changes to the application state. They are functions responsible for specifying how the application's state changes in response to certain actions dispatched to the store.
  // Reducers are pure functions, meaning they produce the same output for a given input and have no side effects. They take the current state and an action as arguments, and return the new state.





 






  reducers: {
    // methods to be dispatched = there are two actions

    // update the state values if the user is logged in
    login: (state, action) =>
     {
        state.status = true;
        state.userData = action.payload.userData;
        // payload is the data 
        // state.userData = action.payload.userData;

    },

// There is no need to spread things



        // update the state values if the user is logged out 
    logout: (state) => {
        state.status = false;
        state.userData = null
    }
  },
});





export const {login,logout} = authSlice.actions;

export default authSlice.reducer;









// import { createSlice } from "@reduxjs/toolkit";

// const initialStates = {
//   status:false,
//   // now the user is not authenticated at present so is false
//   userData: null
// }

// // The work of slice is track authentication
// const authslice = createSlice({
//   name:"auth",
//   initialState,

//   reducers: {

//     login:(state, action) => {
//       state.status = true;
//       state.userData = action.payload;
//     }



//     logout:(state,action) => {
//       state.status = false;
//       state.userData = null
//     }
//    }
// })

// export {login , logout} = authslice.actions;


// // export authslice.reducer