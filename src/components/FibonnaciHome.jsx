import '../styles/FibonnaciHome.css';
import CursorTrail from './CursorTrail';
import {useRef, useEffect} from 'react';

function FibonnaciHome() {
  const audioRef = useRef(new Audio('/soundFibonnaci.mp3'));

  useEffect(() => {
    const audio = audioRef.current;

    // Function to play audio
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error('Audio play failed:', error);
      }
    };

    playAudio();

    return () => {
      audio.pause(); 
      audio.currentTime = 0;
    };
  }, []); 


  return (
    <div className="app-background">
      <CursorTrail />
      <h1 className='welcome-sign'>
        Welcome to Fibonnaci
      </h1>
      
    </div>
  );
}

export default FibonnaciHome;
