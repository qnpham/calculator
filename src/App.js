import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState(0);
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [onFirstNum, toggleFirstBoolean] = useState(true);
  function solveHandler() {
    alert("solved");
  }
  useEffect(() => {
    console.log("first:", firstNumber);
    console.log("second:", secondNumber);
  });
  function buttonHandler(e) {
    if (e.target.matches("span")) {
      const number = e.target.innerText;
      if (onFirstNum) {
        setFirstNumber(number);
        toggleFirstBoolean(false);
      } else {
        setSecondNumber(number);
        toggleFirstBoolean(true);
      }
    }
  }
  return (
    <div className="container">
      <div className="calculator-container">
        <div className="screen">{product}</div>
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
          <span className="column-one-fourth button" onClick={solveHandler}>
            =
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
