import '../styles/SoundBar.css';
import { useRef, useEffect, useState } from 'react';

function SoundBar() {
  const [sound, setSound] = useState(true);
  const audioRef = useRef(new Audio('/soundFibonnaci.mp3'));

  useEffect(() => {
    const audio = audioRef.current;

    const handleAudioPlay = async () => {
      if (sound) {
        try {
          await audio.play();
        } catch (error) {
          console.error('Audio play failed:', error);
        }
      } else {
        audio.pause();
      }
    };

    handleAudioPlay();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [sound]);

  const toggleSound = () => {
    setSound((prevSound) => !prevSound);
  };

  return (
    <div className="sound-bar">
      <img
        src={sound ? '/volumeOn.png' : '/volumeOff.jpg'}
        alt="Sound Toggle"
        className="sound-toggle"
        onClick={toggleSound}
      />
    </div>
  );
}

export default SoundBar;
