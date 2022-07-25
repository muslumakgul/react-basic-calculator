import React, { useState } from "react";

import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearOutput = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result));
  };

  return (
    <div className="display">
      <div className="output">{result}</div>
      <div className="calc-keypad">
        <button className="clear" onClick={clearOutput}>
          Clear
        </button>
        <br></br>
        <button value={"/"} onClick={clickHandler}>
          /
        </button>
        <button value={"7"} onClick={clickHandler}>
          7
        </button>
        <button value={"8"} onClick={clickHandler}>
          8
        </button>
        <button value={"9"} onClick={clickHandler}>
          9
        </button>
        <button value={"*"} onClick={clickHandler}>
          *
        </button>
        <button value={"4"} onClick={clickHandler}>
          4
        </button>
        <button value={"5"} onClick={clickHandler}>
          5
        </button>
        <button value={"6"} onClick={clickHandler}>
          6
        </button>
        <button value={"-"} onClick={clickHandler}>
          -
        </button>
        <button value={"1"} onClick={clickHandler}>
          1
        </button>
        <button value={"2"} onClick={clickHandler}>
          2
        </button>
        <button value={"3"} onClick={clickHandler}>
          3
        </button>
        <button value={"+"} onClick={clickHandler}>
          +
        </button>
        <button value={"0"} onClick={clickHandler}>
          0
        </button>
        <button onClick={clickHandler}>.</button>
        <button className="result" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
