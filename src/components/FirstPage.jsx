import React, { useState } from 'react';
import '../styles/FirstPage.css';

function FirstPage({ onNext }) {
  const [fade, setFade] = useState(false);
  const [zoom, setZoom] = useState(false);

  // Handle button click with animations
  const handleClick = () => {
    setFade(true);
    setTimeout(() => {
      setZoom(true);
    }, 3000);
    setTimeout(() => {
      onNext();
    }, 4000);
  };

  // Wrap each letter in a span and handle spaces correctly
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
