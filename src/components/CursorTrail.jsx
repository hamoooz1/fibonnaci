import React, { useEffect } from 'react';
import '../styles/CursorTrail.css';

const CursorTrail = () => {
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Create a new div for the trail "cursor"
      const trailCursor = document.createElement('div');
      trailCursor.className = 'trail-cursor';
      
      // Position the cursor trail
      trailCursor.style.left = `${event.pageX}px`;
      trailCursor.style.top = `${event.pageY}px`;
      
      // Append the trail to the body
      document.body.appendChild(trailCursor);
      
      // Remove the trail after 500ms
      setTimeout(() => {
        trailCursor.remove();
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
