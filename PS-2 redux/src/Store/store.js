 import {configureStore} from '@reduxjs/toolkit'
 import todoReducer from '../Slices/slicetodo'

 export const store = configureStore({
    reducer:todoReducer
 })