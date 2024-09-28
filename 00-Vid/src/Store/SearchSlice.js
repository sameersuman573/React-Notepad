

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText : " "
}

const searchSlice = createSlice({
    name: "Search",
    initialState ,

    reducers: {
setSearchtext : ( state , action) => {
    state.searchText = action.payload
}
    }

})

export const { setSearchtext} = searchSlice.actions;
export default searchSlice.reducer