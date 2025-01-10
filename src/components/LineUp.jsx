import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/LineUp.css';

function LineUp() {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // Much faster speed for continuous effect
    slidesToShow: 6,
    slidesToScroll: 1, // Scroll one slide at a time for smooth motion
    autoplay: true,
    autoplaySpeed: 0, // No delay between autoplay transitions
    cssEase: "linear", // Linear easing for smooth, constant speed
    pauseOnHover: false,
    vertical: true
  };
  

  return (
    <div className='line-container'>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Meme ${index + 1}`}
              className="line-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LineUp;
