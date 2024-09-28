import { useState, useCallback, useEffect ,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {


// usestate hook - it is used to store the values and to update the values
  // to display on UI
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");



  // useRef hook
  // used in copy to clipboard function
const passwordref = useRef(null)



  // usecallback hook lets you re-render whenever required- it memorizes the function

  // Memoization ensures that a method doesn't run for the same inputs more than once by keeping a record of the results for the given inputs (usually in a hash map).

  // dependencies will be passed in array format
  // useCallback(fn,[])
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIFJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) 
     { str += "0123456789"} ;

    if (charallowed)  
     {str += "~!@#$%^&*()_+?><:'[]{},`.;"};




    //  function to add values in the password
    // length is used in usestate
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // we have not received characters from strings so to fetch it we need to use Charat keyword
      pass += str.charAt(char);
    }






    setpassword(pass);
  }
  , [length, numberallowed, charallowed, setpassword]); //change in these dependencies will lead to change in methods - it keeps these dependencies in cache 
  // if any of these dependencies changes it the hook will update the password
// dont compare these dependencies with useeffect





// copying password to clipboard
const copypasswordtoclipboard = useCallback(() => {
  // with the password ref we can get the results that is the current object accessible or selectable 
  // it selects from feild where password is generated
  // to select all values
  passwordref.current?.select();
  // to select a given range 
  passwordref.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(password)},[password])





// running is performed from here
// useEffect - it manages that if any thing changes under these parameters then re run all paramters
// whenever page loads the function to generate the password is called 
  useEffect(() => {
    passwordgenerator()
  },[length,numberallowed,charallowed,passwordgenerator])








  return (
    <>



      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-800">


{/* output feild - where password will be generated*/}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            // ------------------- both the upper properties are very important
            className="outline-none w-full py-1 px3"
            placeholder="password"
            // no one will be able to mofify it - readonly
            readOnly
            ref={passwordref}
          ></input>






{/* button  */}
          <button onClick={copypasswordtoclipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>





{/* attributes to be included in password */}

        <div className="flex text-sm gap-x-2">



          <div className="flex items-center gap-x-1">

            <input
            type="range"
            // by writing type = range a slider will be created
               min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              // onchange is an event which monitors any change in the event - that is slider
              onChange={(e) => {
                setlength(e.target.value)
              }}
 
            ></input>



            <label>Length:{length}</label>
          </div>





{/* checkboxes */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultchecked={numberallowed}
              id="numberinput"
              onChange={() => {
                // the prev value will become false if it was previoulsy true and vice-versa
                setnumberallowed((prev) => !prev);
              }}
            ></input>


            <label htmlFor="numberinput">Numbers</label>
          </div>



          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultchecked={charallowed}
              id="characterinput"
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            ></input>


            <label htmlFor="characterinput">Charcters</label>
        </div>
          

          
        </div>
      </div>
    </>
  );
}

export default App;
