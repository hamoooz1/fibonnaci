import React, { useState } from 'react';
import FibonnaciHome from './components/FibonnaciHome';
import FirstPage from './components/FirstPage';
import Countdown from './components/Countdown';

function App() {
  const [showFibonnaciPage, setShowFibonnaciPage] = useState(false);
  const [startCountdown, setStartCountdown] = useState(false);

  const handleNextClick = () => {
    setStartCountdown(true); // Start the countdown
  };

  const handleCountdownComplete = () => {
    setShowFibonnaciPage(true); // Show Fibonacci page after countdown
  };

  return (
    <div>
      {showFibonnaciPage ? (
        <FibonnaciHome />
      ) : (
        <>
          <FirstPage onNext={handleNextClick} />
          <Countdown
            startCountdown={startCountdown}
            onComplete={handleCountdownComplete}
          />
        </>
      )}
    </div>
  );
}

export default App;
