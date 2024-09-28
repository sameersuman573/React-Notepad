import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

//for every application there is only one store
// configure the store which consist of objects
// store needs the knowledge of the reducers
export const store = configureStore({
    reducer:todoReducer
})

// If any thing changes than it must be updated to the store
// Centralized State Management: Redux promotes a single, centralized store for managing the entire application state. This means that all of the application's data is stored in a single JavaScript object within the Redux store. Centralizing state management simplifies data access and manipulation, making it easier to maintain and reason about the application's state.











