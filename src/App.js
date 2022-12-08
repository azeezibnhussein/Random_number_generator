import React, { useState } from "react";
import "./styles.css";

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);
  const [output, setOutput] = useState(
    Math.floor(Math.random() * (max - min + 1) + min)
  );
  const randomOutput = () => {
    setOutput(Math.floor(Math.random() * (max - min + 1) + min));
  };

  return (
    <div className="main-container">
      <div className="showcase">
        <div className="instructions-section">
          <p className="output">
            Random Number: <span>{output}</span>
          </p>
          <p>Click the button below to generate random number</p>
        </div>

        <div className="random-number-container">
          <div className="num">
            <p>Min:</p>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(+e.target.value)}
            />
          </div>

          <div className="num">
            <p>Max:</p>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(+e.target.value)}
            />
          </div>
        </div>

        <div className="btn">
          <button onClick={randomOutput}>Click here</button>
        </div>
      </div>
    </div>
  );
}

export default App;
