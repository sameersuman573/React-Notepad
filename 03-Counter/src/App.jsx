import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//  using hooks you can update the data on UI
// usestate send update in batches so if you copy a code to add multiple times then it will act as a single function so will run only one time
// react controls the UI updation

function App() {
  // usestate hook - it is responsible for the change of state- this change is propgated to the DOM
  // wherever will be the function located in this ' {} '  react will update the value at all that place

  // usestate - we get two things in form of arrays(1.counter, 2.function)
  let [counter, setCounter] = useState(5);
  // 5 is the default value
  // counter - will update at the UI
  // setcounter - it will change the value givn by the user and will give the value to the counter

  // function-1 - +++
  const addvalue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);

    // prev counter is a previous value its is just a random name
    // the important thing is that this function come through callback function
    // callback function - here if you copy same function then all  function will act because it is a callback function

    // It will run code 5 times
    // the callback function fetches the last updated state
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    // this code will not run code 5 times because -- usestate send update in batches so if you copy a code to add multiple times then it will act as a single function so will run only one time
    // to solve this issue we use callback function
    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
  };

  // function-2 - ---
  const removevalue = () => {
    console.log("clicked", counter);
    if (counter < 1) {
      console.log(counter);
    } else setCounter(counter - 1);
  };

  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter value : {counter} </h2>

      {/* button1 */}
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      {/* button2 */}
      <button onClick={removevalue}>Remove value {counter}</button>
    </>
  );
}

export default App;
