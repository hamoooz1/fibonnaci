import React, { useEffect, useState } from 'react';
import '../styles/TypeWriter.css';

function TypeWriter({ label }) {
  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    setTextArray(label.split(""));
  }, [label]);

  return (
    <h1 className="welcome-writer">
      {textArray.map((char, index) => (
        <span
          key={index}
          style={{ '--i': index }}
          className={char === " " ? "space" : ""}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

export default TypeWriter;
