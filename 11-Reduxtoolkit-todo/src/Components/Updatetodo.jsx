import React, { useState } from "react";
import { updatetodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { set } from "react-hook-form";

function Updatetodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  // With the help of useselector we are getting the value but we need acces to state so we wrote it

  const [newdata, setnewdata] = useState("");
  const [ID, setID] = useState(-1);

  const Handleupdate = (e) => {
    e.preventDefault();
    dispatch(updatetodo({ id: ID, text: newdata }));
    console.log(newdata);
    setnewdata("");
    setID(-1);
  };


//   this function will track the id
  const Handleid = (id) => {
    setID(id);
    const updateid = todos.find((todo) => todo.id === id);
    // setnewdata( updateid ?.text || "")
  console.log(newdata); 
    if (updateid) {
      setnewdata(updateid.text);
    }
  };



  return (
    <>
      <div>
        {todos.map((todo, id) =>
          todo.id === ID ? (
            <li key={todo.id}>
              <div key={todo.id}>
                <form onSubmit={Handleupdate}>
                  <input
                    type="text"
                    value={newdata}
                    placeholder="update it"
                    onChange={(e) => setnewdata(e.target.value)}
                  />

                  <button
                     type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    update Todo
                  </button>
                </form>
              </div>
            </li>
          ) : (
            <li key={todo.id}>
              {/* // className="mt-4 flex justify-between items-center bg-zinc-800
              px-4 py-2 rounded" */}
              <div key={todo.id}>
                <button
                  onClick={(e) => {
                    // so that it is not rerenders twice
                    e.preventDefault();
                    Handleid(todo.id);
                  }}
                  type="submit"
                  // className="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Edit
                </button>
              </div>
            </li>
          )
        )}
      </div>
    </>
  );
}

export default Updatetodo;
