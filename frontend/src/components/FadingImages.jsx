import { useState, useEffect } from 'react';
import '../styles/FadingImages.css';

function FadingImages() {
  const images = [
    '/meme1.png',
    '/meme2.png',
    '/meme3.png',
    '/meme4.png',
    '/meme5.png',
    '/meme6.png',
    '/meme7.png',
    '/meme8.png'
  ];

  const [positions, setPositions] = useState(
    images.map(() => ({ top: '50%', left: '50%' }))
  );

  useEffect(() => {
    // Function to generate a fully random position within the viewport
    const getRandomPosition = () => {
      const top = `${Math.floor(Math.random() * 100)}%`; // Full viewport height
      const left = `${Math.floor(Math.random() * 100)}%`; // Full viewport width
      return { top, left };
    };

    // Set up individual intervals for each image with high randomness
    const intervalIds = images.map((_, index) => {
      return setInterval(() => {
        setPositions((prevPositions) => {
          const newPositions = [...prevPositions];
          newPositions[index] = getRandomPosition(); // Assigns a random position each time
          return newPositions;
        });
      }, Math.floor(Math.random() * 2000) + 500); // Random interval between 0.5-2.5 seconds
    });

    // Clear intervals on component unmount
    return () => intervalIds.forEach(clearInterval);
  }, []);

  // Function to get a random size between 30px and 80px
  const getRandomSize = () => {
    return `${Math.floor(Math.random() * 30) + 50}px`; // Random size between 30px and 80px
  };

  return (
    <div className="fading-images-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Fading Element"
          className="fading-image"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            width: getRandomSize(), // Apply random width
            height: getRandomSize(), // Apply random height
            animationDelay: `${Math.random() * 6}s`, // Random delay for fade animation
          }}
        />
      ))}
    </div>
  );
}

export default FadingImages;
