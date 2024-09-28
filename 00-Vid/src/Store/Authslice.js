
import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
    status : false,
    userdata : null,
}



const authslice = createSlice({
name : "auth",
initialState,

reducers:{

     login: ( state , actions) => {
        state.status = true,
        state.userdata = actions.payload.userdata
     },


     logout: (state) => {
        state.status = false,
        state.userdata = null
     }
}


})

export const { login , logout} = authslice.actions
export default authslice.reducer