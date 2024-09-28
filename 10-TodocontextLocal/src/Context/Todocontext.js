import {createContext, useContext, createContext} from "react"


// let it be any componenet value will be taken from here only
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    // after passing a message something will happen 
    // these function are managing this
    addtodo: (todo) = {},
    updatetodo: (id,todo) => {},
    deletetodo: (id) => {},
    togglecomplete: (id) => {},
})



// custom hook
// reason for making it - to prevent putting of context in usecontext many times by importing it
// it is just a method
export const useTodo = () => {
    return useContext(TodoContext)
    // usecontext means in which respect we are talking about
}

// exporting a provider
// in main file we need to wrap things so to prevent it
// Provider is a component that supplies the data from a context to its descendant components. It's a fundamental part of how context works.


export const Todoprovider = TodoContext.Provider












































