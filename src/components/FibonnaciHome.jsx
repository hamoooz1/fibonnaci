import '../styles/FibonnaciHome.css';
import CursorTrail from './CursorTrail';
import SoundBar from './SoundBar'; 
import FadingImages from './FadingImages';
import { useState, useEffect } from 'react';

function FibonnaciHome() {
  // Type write effect for welcome sign
  const text = "Explore The Fibonacci Sequence";
  const animatedText = text.split("").map((char, index) => (
    <span 
      key={index} 
      style={{ '--i': index }}
      className={` $char === " " ? "space" : "" `} 
    >
      {char}
    </span>
  ));

  return (
    <div className="app-background">
      <div className="app-header">
      <SoundBar />
    </div>
      <h1 className='welcome-sign'>
          {animatedText}
      </h1>
      <CursorTrail />
      {/* Fading image element */}
      <FadingImages />
    </div>
  );
}

export default FibonnaciHome;
