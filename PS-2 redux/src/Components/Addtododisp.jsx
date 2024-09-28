import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Slices/slicetodo";

// in this we send the data
// we will use dispatch method

function Addtodo() {
  const [input, setinput] = useState('')
  const dispatch = useDispatch()

//   when submit button will be presses it will be called
  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addtodo(input))
    setinput('');
  }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input type="text" placeholder="enter a todo" value={input} onChange={(e) => setinput(e.target.value)}>
      </input>
  
      <button type="submit">ADD TO DO</button>
    </form>
  )
}

export default Addtodo


