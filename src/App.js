import React, {useState} from 'react';
import FibonnaciHome from './components/FibonnaciHome'
import FirstPage from './components/FirstPage';

function App() {
  const [showFibonnaciPage, setShowFibonnaciPage] = useState(false);

  const handleNextClick = () => {
    setShowFibonnaciPage(true);
  }

  return (
    <div>
    {showFibonnaciPage ? (
      <FibonnaciHome />
    ) : (
      <FirstPage onNext={handleNextClick} />
    )}
  </div>
  );
}

export default App;
