import React, { useState } from 'react';
import '../styles/FirstPage.css';

function FirstPage({ onNext }) {
  const [fade, setFade] = useState(false); // State to control the fade animation
  const [zoom, setZoom] = useState(false); // State to control the zoom animation

  // Function to handle the button click with animations
  const handleClick = () => {
    setFade(true); // Start the fade-out animation
    setTimeout(() => {
      setZoom(true); // Start the zoom-in animation
    }, 3000); // Delay for fade-out (3 seconds)
    setTimeout(() => {
      onNext(); 
    }, 4000); 
  };

  return (
    <div className={`container-firstpage ${fade ? 'fade-out' : ''} ${zoom ? 'zoom-in' : ''}`}>
      <div className="content-overlay">
        <h1 className={fade ? 'fade-out-text' : ''}>Enter the Fibonacci Sequence</h1>
        <button className={fade ? 'fade-out-button' : ''} onClick={handleClick}>Go to Fibonacci</button>
      </div>
    </div>
  );
}


export default FirstPage;
