import React, { useEffect, useState } from "react";
import "./App.css";
import dice from "./images/icon-dice.svg";
import divider from "./images/pattern-divider-desktop.svg";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const responseData = await response.json();
    const data = responseData.slip;
    setAdvice(data.advice);
    setId(data.id);
    console.log(data);
  };

  const getAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="App">
      <p className="advice-id">ADVICE #{id}</p>
      <p className="advice-content">{`"${advice}"`}</p>
      <img className="divider" src={divider} alt="divider" />
      <div className="dice-container" onClick={getAdvice} >
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default App;
