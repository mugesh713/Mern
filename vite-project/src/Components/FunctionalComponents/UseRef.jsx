import React, { useState, useRef, useEffect } from "react";

const UseRefExample = () => {
  // State variables for text and number
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  // useRef to store previous values
  const prevText = useRef("");
  const prevNumber = useRef(0);

  // Update previous text whenever `text` changes
  useEffect(() => {
    prevText.current = text;
  }, [text]);

  // Update previous number whenever `number` changes
  useEffect(() => {
    prevNumber.current = number;
  }, [number]);

  return (
    <section style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Example of useRef</h1>

      {/* Text Input */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="textInput" style={{ marginRight: "10px" }}>
          Enter text:
        </label>
        <input
          id="textInput"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h2 style={{ marginTop: "10px" }}>Current text: {text}</h2>
        <h3>Previous text: {prevText.current}</h3>
      </div>

      {/* Number Input */}
      <div>
        <label htmlFor="numberInput" style={{ marginRight: "10px" }}>
          Enter a number:
        </label>
        <input
          id="numberInput"
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <h2 style={{ marginTop: "10px" }}>Current number: {number}</h2>
        <h3>Previous number: {prevNumber.current}</h3>
      </div>
    </section>
  );
};

export default UseRefExample;
