import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);
  const para =
    "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

  function handleClick() {
    setShow((prev) => !prev);
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={handleClick}>
        Click me
      </button>
      {show && para}
    </div>
  );
}

export default App;
