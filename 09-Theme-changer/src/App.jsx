import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Components/Card";
import ThemeBtn from "./Components/Themebtn";
import { ThemeProvider } from "./Contexts/Theme";

function App() {

 const [themeMode, setthemeMode] = useState("light")

 const lightTheme = () => {
  setthemeMode("light")
 }

 const darkTheme = () => {
  setthemeMode("dark")
 }

//  actual change in theme it is done by js only - see
useEffect(() => {
  // we can get any element so get the access of html
  // classList provides a convenient way to manipulate CSS classes in JavaScript, making it easier to manage the visual appearance and behavior of elements dynamically.

  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])
// dependenvy - if any thing changes in the property under dependency then useeffect shall run again

  return (
    // wrapping in theme provider
    // for these vlaues we have a direct access 


    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>



 <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn/>
         </div>




        <div className="w-full max-w-sm mx-auto">
        <Card/>
         </div>
      </div>
    </div>


    </ThemeProvider>



   
  );
}

export default App;
