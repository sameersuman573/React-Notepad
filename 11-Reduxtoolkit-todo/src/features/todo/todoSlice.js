//  we call features as slice

// to create slice we neeed three things that are
// name
// initial state
// reducers - full list

// STATE IS THE COLLECTION OF DATA

import { createSlice, nanoid } from "@reduxjs/toolkit";
 // nano id geneartes unique ids

// initial state can include
// 1.How store would be will it have some values or it will be empty
// 2. fethcing data from databases
// so we are keeping objects because it can include any of the multiple types of values
const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};
// state - current state

// Slice Logic: A slice contains the reducer function responsible for handling state changes related to the slice. The reducer function typically takes the current state and an action as parameters and returns a new state based on the action type.
export const todoslice = createSlice({
  name: "todo",
  // name of the slice
  initialState,

  // creating reducers
  reducers: {
    // reducers include properties and functions

    // 1.reducers
    // In function - we have two accesss - state and actions
    addtodo: (state, action) => {
      // in state we get the current state
      // in action we pass the data

      // creating a todo
      const todo = {
        id: nanoid(),
        text: action.payload,
        // payload is an object to get the data from todo
      };
      //   updating the state by accesing todos
      state.todos.push(todo);
      // In initial state we have taken an object called todos so pushing there itself
      // state is preserved here not in context api
    },

    // 2.reducers
    removetodo: (state, action) => {
      // if the id matches with the todo then we will remove that todo
      // if it matches then it will be removed so it must not match
      const removetodoid = action.payload;
      state.todos = state.todos.filter((todo) => todo.id != removetodoid);
      // The filter methods creates a new array by by incorporating only elements whose id does not matches with the existing id if it matches it woll not include in the filtered array
    },

    
    updatetodo: (state, action) => {
      // Destructure the properties
      const { id, text } = action.payload;
      //  Now writing the findindex function to find the todo which we need to update
      const index = state.todos.findIndex((todo) => todo.id === id);
      // now if the index exists then update at the found index by doing shallow copying
      if (index !== -1) {
        // creating a new array which does the shallow copy without affecting the original state and updates it
        const updateTodos = [...state.todos];
        // updating the values at the found index and overiding the text values there by incorporating the new text by overiding the previous text
        updateTodos[index] = { ...updateTodos[index], text: text };
        state.todos = updateTodos;
      }
      // yet i have not pushed the data yet
    },
  },
});

// we need to export two parts of reducers
// exporting the functionalities as to update the state
// exporting the individual functionality if there is 10 functionality export all by thier names
export const { addtodo, removetodo, updatetodo } = todoslice.actions;
// we will get the action values

export default todoslice.reducer;
// exporting the main source
// it needs the list of all reducers
