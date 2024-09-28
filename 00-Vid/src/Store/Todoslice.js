
import { createSlice , nanoid } from "@reduxjs/toolkit";
import Todos from "../../../11-Reduxtoolkit-todo/src/Components/Todos";


const initialState = {
    // we will be using an array to push any new todos 
    Todos : [{ id: 1 , text: "Hello world"}]
}



const Todoslice = createSlice({
    name: "Todo",

    initialState,

    reducers:{

        Addtodo: (state , action) => {

            const add = ({
                id: nanoid(),
                text: action.payload
            })

            // we need to put the add function beacuse it contains the newly created to do , we cannot put Addtodo beacuse it is a reducer
            state.Todos.push(add)
        } ,



        Removotodo: (state , action) => {
            // we would refer to the array todos beacuse from that we have to remove the todos

            // we had wriiten this statement beacuse we want to specifically refer to the ID which i want to remove
            const todoIdremove = action.payload.id
            state.Todos = state.Todos.filter((todo) => todo.id != todoIdremove )
        },


        Updatetodo: (state, action) => {

            const {id , text} = action.payload
            const index = state.Todos.find((todo) => todo.id === id)

            if( index !== -1){
                const updatearr = [...state.Todos]
                // Update the array at the found index
                updatearr[index] = { ...updatearr[index], text:text}
                state.Todos = updatearr
            }
            
        }
    }
})

export const { Addtodo , Removotodo , updatearr} = Todoslice.actions
export default Todoslice.reducer
