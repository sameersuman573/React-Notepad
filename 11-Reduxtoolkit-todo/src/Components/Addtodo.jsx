import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addtodo} from '../features/todo/todoSlice' 


// In this we need to send the data



function AddTodo() {

  const [input, setInput] = useState('')
  // adding something in store is done by dispatch



  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
      e.preventDefault()
      dispatch(addtodo(input))
      // under dispatch we need to call reducer(addtodo) to add the values
      // dispatch using reducer changes the value in store
      setInput('')
  }

  

  
return (

  // upper section form

  <form onSubmit={addTodoHandler} className="space-x-3 mt-12">

    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

      placeholder="Enter a Todo..."

      value={input}

      onChange={(e) => setInput(e.target.value)}
    />



    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    > Add Todo
    </button>
  </form>
)
}

 
export default AddTodo




















// // in reducer there is a function called 

// function addtodos() {

//   const [inputdata, setinputdata] = useState('')

//   // to send the post
//   // dispatch is used to update the values in the store

//   const dispatch = useDispatch();


//   // make a simple function
//   const addtohandler = (e) => {
//     e.preventDefault()
//     dispatch(addtodo(input))
//     setInput('')

//     // now you will be getting the input from input section using
//     onChange = {(e) => setinputdata(e.target.value)}
//     // whnever button will be clicked call addtohandler function
//     // onclick is not a callback function
//     <button onClick={addTodoHandler}></button>

//   }
// }