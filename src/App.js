import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState(0);
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
      } else if (value === "-") {
        setAction("subtract");
      } else if (value === "+") {
        setAction("add");
      } else if (value === "/") {
        setAction("divide");
      } else if (value === "=") {
        setDisplay(total);
        setFirstNumber(total);
        setSecondNumber(null);
        setAction(null);
        toggleFirstBoolean(false);
      } else {
        if (onFirstNum) {
          setFirstNumber(Number(value));
          toggleFirstBoolean(false);
          setDisplay(value);
        } else {
          setSecondNumber(Number(value));
          toggleFirstBoolean(true);
          setDisplay(value);
        }
      }
    }
  }
  return (
    <div className="container">
      <div className="calculator-container">
        <div className="screen">{display}</div>
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
          <span className="column-one-fourth button">.</span>
          <span className="column-one-fourth button">+</span>
          <span className="column-one-fourth button">=</span>
        </div>
      </div>
    </div>
  );
}

export default App;
