import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import Hello from "../Hello";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Lets start</h1>
      <Hello />
    </>
  );
}

export default App;
