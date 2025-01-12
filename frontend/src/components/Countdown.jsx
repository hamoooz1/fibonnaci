import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css'; 

function Countdown({ onComplete, startCountdown }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (startCountdown && count === null) {
      setCount(5); 
    }

    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000); 
      return () => clearTimeout(timer); 
    } else if (count === 0) {
      onComplete(); 
    }
  }, [startCountdown, count, onComplete]);

  return (
    count !== null && (
      <div className="countdown">
        <span>{count}</span>
      </div>
    )
  );
}

export default Countdown;
