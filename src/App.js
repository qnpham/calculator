import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState(null);
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [onFirstNum, toggleFirstBoolean] = useState(true);
  const [action, setAction] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    console.log("first:", firstNumber);
    console.log("second:", secondNumber);
    console.log("action:", action);
    if (firstNumber !== null && secondNumber !== null && action !== null) {
      solver(action);
    }
  });
  function solver(a) {
    if (a === "add") {
      setTotal(firstNumber + secondNumber);
    } else if (a === "multiply") {
      setTotal(firstNumber * secondNumber);
    } else if (a === "subtract") {
      setTotal(firstNumber - secondNumber);
    } else if (a === "divide") {
      setTotal(firstNumber / secondNumber);
    }
  }
  function buttonHandler(e) {
    if (e.target.matches("span")) {
      const value = e.target.innerText;
      if (value === "x") {
        setAction("multiply");
        if (firstNumber !== null) {
          toggleFirstBoolean(false);
        }
      } else if (value === "-") {
        setAction("subtract");
        if (firstNumber !== null) {
          toggleFirstBoolean(false);
        }
      } else if (value === "+") {
        setAction("add");
        if (firstNumber !== null) {
          toggleFirstBoolean(false);
        }
      } else if (value === "/") {
        setAction("divide");
        if (firstNumber !== null) {
          toggleFirstBoolean(false);
        }
      } else if (value === "=") {
        setDisplay(total);
        setFirstNumber(null);
        setSecondNumber(null);
        toggleFirstBoolean(true);
        setAction(null);
      } else if (value === "AC") {
        setFirstNumber(null);
        setSecondNumber(null);
        setDisplay(null);
        toggleFirstBoolean(true);
        setAction(null);
        setTotal(null);
      } else {
        if (onFirstNum) {
          setFirstNumber(Number(value));
          setDisplay(value);
        } else {
          setSecondNumber(Number(value));
          setDisplay(value);
        }
      }
    }
  }
  const screen = display === null ? 0 : display;
  return (
    <div className="container">
      <div className="calculator-container">
        <div className="screen">{screen}</div>
        <div className="buttons" onClick={buttonHandler}>
          <span className="column-one-fourth button">7</span>
          <span className="column-one-fourth button">8</span>
          <span className="column-one-fourth button">9</span>
          <span className="column-one-fourth button">/</span>
          <span className="column-one-fourth button">4</span>
          <span className="column-one-fourth button">5</span>
          <span className="column-one-fourth button">6</span>
          <span className="column-one-fourth button">x</span>
          <span className="column-one-fourth button">1</span>
          <span className="column-one-fourth button">2</span>
          <span className="column-one-fourth button">3</span>
          <span className="column-one-fourth button">-</span>
          <span className="column-one-fourth button">0</span>
          <span className="column-one-fourth button">AC</span>
          <span className="column-one-fourth button">+</span>
          <span className="column-one-fourth button">=</span>
        </div>
      </div>
    </div>
  );
}

export default App;
