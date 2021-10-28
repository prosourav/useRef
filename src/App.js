import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [RandomNumber, setRandomNumber] = useState();
  const previousNumberRef = useRef("");
  const inputEl = useRef("");

  function Reset() {
    setName("");
    inputEl.current.focus();
  }

  useEffect(() => {
    previousNumberRef.current = RandomNumber;
  }, [RandomNumber]);

  return (
    <div className="App">
      <input
        ref={inputEl}
        type="text"
        onChange={(e) => setName(e.target.value)}
        autoComplete="on"
        value={name}
      />

      <button onClick={Reset}>Reset</button>
      <h3>Hi, i am {name}</h3>

      <div>
        <h2>Random number :{RandomNumber} </h2>
        {typeof (previousNumberRef !== undefined) && (
          <h3>Preious Counter :{previousNumberRef.current}</h3>
        )}
        <button onClick={() => setRandomNumber(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
      </div>
    </div>
  );
}

export default App;
