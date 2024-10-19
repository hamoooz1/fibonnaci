import React, { useEffect } from 'react';
import '../styles/CursorTrail.css'

const CursorTrail = () => {
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Create a new div for the trail dot
      const trailDot = document.createElement('div');
      trailDot.className = 'trail-dot';
      
      // Position the dot at the mouse cursor position
      trailDot.style.left = `${event.pageX}px`;
      trailDot.style.top = `${event.pageY}px`;
      
      // Append the dot to the body
      document.body.appendChild(trailDot);
      
      // Remove the dot after 500ms to clear the trail
      setTimeout(() => {
        trailDot.remove();
      }, 500);
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; 
};

export default CursorTrail;
