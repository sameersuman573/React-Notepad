 import {createSlice, nanoid} from '@reduxjs/toolkit'

// creating slices 
// name
// initialState
// reducers


const initialState = {
    todos: [{id:1 , text:"my buddy"}],
};

export const slicetodo = createSlice( {
    name:"todo",
    initialState,
    reducers: {


// reducers consist of callback functions

        // ADDTODO
        addtodo:(state,action) => {

            const todo = {
                id:nanoid(),
                text: action.payload
            };
            state.todos.push(todo)
        },



        // REMOVETODO
        removetodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
    
});

export const {addtodo,removetodo} = slicetodo.actions;
export default slicetodo.reducer;
