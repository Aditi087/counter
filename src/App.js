import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setcount] = useState(1);

  const dec = () => {
    setcount(count - 1);
  };

  const inc = () => {
    setcount(count + 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>{count}</div>
      <div style={{marginBottom:"10px"}}>
        {count === 0 ? (
          <div>
            <Button variant="warning" >-</Button> <Button variant="success" onClick={inc}>+</Button>
          </div>
        ) : (
          <div>
            <Button variant="warning" onClick={dec}>-</Button> <Button variant="success" onClick={inc}>+</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
