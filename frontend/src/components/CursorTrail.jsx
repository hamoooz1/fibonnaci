import React, { useEffect } from 'react';
import '../styles/CursorTrail.css';

const CursorTrail = () => {
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const trailCursor = document.createElement('div');
      trailCursor.className = 'trail-cursor';
      
      trailCursor.style.left = `${event.pageX}px`;
      trailCursor.style.top = `${event.pageY}px`;
      
      document.body.appendChild(trailCursor);
      
      setTimeout(() => {
        trailCursor.remove();
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; 
};

export default CursorTrail;
