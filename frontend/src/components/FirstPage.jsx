import React, { useState } from 'react';
import '../styles/FirstPage.css';

function FirstPage({ onNext }) {
  const [fade, setFade] = useState(false);
  const [zoom, setZoom] = useState(false);

  const handleClick = () => {
    setFade(true);
    setZoom(true);
    onNext();
  };

  const text = "Enter the Fibonacci Sequence";
  const animatedText = text.split("").map((char, index) => (
    <span 
      key={index} 
      style={{ '--i': index }}
      className={char === " " ? "space" : ""}
    >
      {char}
    </span>
  ));

  return (
    <div className={`container-firstpage ${fade ? 'fade-out' : ''} ${zoom ? 'zoom-in' : ''}`}>
      <div className="content-overlay">
        <h1 className={fade ? 'fade-out-text' : 'welcome-writer bounce-letter'}>
          {animatedText}
        </h1>
        <button className={fade ? 'fade-out-button' : ''} onClick={handleClick}>Go to Fibonacci</button>
      </div>
    </div>
  );
}

export default FirstPage;