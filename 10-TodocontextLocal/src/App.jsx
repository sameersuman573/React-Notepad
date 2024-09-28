import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todoprovider } from "./Context";
import TodoForm from "./Components/Todoform";
import TodoItem from "./Components/Todoitem";

// todos - it is an object
// todo - it is a message
function App() {
 
  // to store the todos and also ui is also changing so we will keep it in Ui 
  const [todos, settodos] = useState([])



  const addtodo = (todo)  => {
    // this todo should go inside the array of usestate
    // to find the old state
    // taking the old values and spredaing it
    settodos((prev) => [{id:Date.now(),...todo},...prev])
  }                  
  

  const updatetodo = (id,todo) => {
// we need to apply loop to find which id we need to update
// by mapping we took the prev state of the array
settodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo: prevtodo)));
  }


  const deletetodo = (id) => {
    // id ka dusra naam hai todo
  settodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  
  
const togglecomplete = (id) => {
  settodos((prev) => 
  prev.map((prevtodo) => 
  prevtodo.id === id? {...prevtodo, 
    completed: !prevtodo.completed}:prevtodo ))
  // with spread operator came the data
  // id:1,
  // todo:"Todo msg",
  // completed: false,
}





// local storage

useEffect(() => {
  // during setitem we need to write key and value
  // during getitem we need to write only key
  // values are in string to change in json
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length > 0 ){
settodos(todos)
  }
}, [])

useEffect(() => {
  // value is given in string
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])





  return (
    // wrapping the data with todo provider
    // dont forget to add values
    <Todoprovider value={{todos,addtodo,updatetodo}}>
<div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
        {/* Todo form goes here */}
        <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id}
            className="w-full">
<TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Todoprovider>
    
  );
}

export default App;
