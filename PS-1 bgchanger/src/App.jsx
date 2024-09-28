 import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div className="w-full h-screen"
        style={{ backgroundColor: color }}
      >
        
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }} // bcg color for button
          >
            RED
          </button>

          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            PINK
          </button>
        </div>
    </>
  );
}

export default App;


 