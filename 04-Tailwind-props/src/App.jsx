import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  // creating two objects

  // objects-1
  let myobj = {
    username: "hitesh",
    age: 21,
  };

  // objects-2
  let newarr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind Test</h1>

      {/* just passing the props is not the only work it must be handled properly so it must be passed properly into the card function from where it will be embeded there */}
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" btnText="visit me" />
      <Card username="sameer" />
     </>
  );
}

export default App;
