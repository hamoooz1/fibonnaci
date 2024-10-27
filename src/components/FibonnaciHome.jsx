import '../styles/FibonnaciHome.css';
import CursorTrail from './CursorTrail';
import SoundBar from './SoundBar'; 
import { useState, useEffect } from 'react';

function FibonnaciHome() {
  // State for controlling image position
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    // Function to generate a random position
    const getRandomPosition = () => {
      const top = `${Math.floor(Math.random() * 80)}%`;
      const left = `${Math.floor(Math.random() * 80)}%`;
      return { top, left };
    };

    // Set interval to update image position every 10 seconds
    const intervalId = setInterval(() => {
      setPosition(getRandomPosition());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-background">
      <CursorTrail />
      <SoundBar /> {/* Render SoundBar at the top */}
      <h1 className="welcome-sign">Welcome to Fibonacci</h1>
      
      {/* Fading image element */}
      <img
        src="/fibonnaciFace.png" // Path to the image in public folder
        alt="Fading Element"
        className="fading-image"
        style={{
          top: position.top,
          left: position.left,
        }}
      />
    </div>
  );
}

export default FibonnaciHome;
