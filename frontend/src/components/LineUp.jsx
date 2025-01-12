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
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false
  };

  return (
    <div className="vertical-line-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img
              src={src}
              alt={`Meme ${index + 1}`}
              className="vertical-line-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LineUp;
