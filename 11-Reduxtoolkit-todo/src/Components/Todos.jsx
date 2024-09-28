import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetodo } from "../features/todo/todoSlice";
import { updatetodo } from "../features/todo/todoSlice";
import { MdEdit } from "react-icons/md";
import { set } from "react-hook-form";

// Now here we are getting the values
// And here we will be accessing the values and removing the specific value

// in addtodo we are sending the values
function Todos() {

  // It is a method where we get the access of state in a callback
  // through selector we are getting the values so we need to get access of state
  const todos = useSelector((state) => state.todos);

 
  const dispatch = useDispatch();
  // we have used dispatch to remove some todos
 

  return (
    <>
      <div>.....Todos.....</div>

      <ul className="list-none">
        {/* after map we get access to all values */}

        {todos.map((todo, id) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            {/* Text is the one of the initial state parameter of the todoslice*/}


            <button
              onClick={() => dispatch(removetodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>

 
          </li>
        ))}
      </ul>

      {/* short explanation of code */}

      {/* <div>Todos</div>

      Display all todos
      {todos.map((todo) =>( <li key={todo.id}> {todo.text}

 when we want to pass parameters so we used callback function if we would use parentseis it would be executed immediately

Remove todos
          <button onClick={() => dispatch(removetodo(todo.id))>X</button>
        </li>
      ))} */}
    </>
  );
}




export default Todos;

// {todos.map((todo) => (
//   <li>
//     key={todo.id}
//   </li>

//   {todo.text}
// ))}

// function todosss() {

//   // to access the data we use
//   // synatx for useselector is that it take a callback function and props as state and using that it access the value of the todods
//   const todosss= useSelector((state) => state.todos);

//   const dispatch = useDispatch();

//   // now to remove todos
//   <button onClick={(todo) => dispatch(removetodo(todo.id)) }></button>
// }
