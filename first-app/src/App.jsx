import Button from "./components/Button";
import './App.css';
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0)
  function add(){
    setNumber(number + 1)
  }
  
  function substract(){
    setNumber(number - 1)
  }
  return (
    <div className="App">
      <h1>MY FIRST REACT APP</h1>
      <h2>Start with react</h2>
      <h3>Our first counter app </h3>
      <Counter>{number}</Counter>
      <Button click={add} content="Add"/>
      <Button click={substract} content="substract"/>
    </div>
  );
}

export default App;
