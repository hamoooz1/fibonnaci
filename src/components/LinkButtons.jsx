import "../styles/LinkButtons.css";
import { useRef, useEffect } from "react";

function LinkButtons({className}) {
  const links = [
    {
      image: 'x.jpg',
      link: 'https://x.com/f1bonacc1s3q',
      alt: 'X Account' 
    },
    {
      image: '/pump.webp',
      link: 'https://pump.fun/board',
      alt: 'PumpFun'
    },
    {
      image: '/youtube.svg',
      link: 'https://www.google.com/search?q=rick+toll&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:d7b50f1f,vid:dQw4w9WgXcQ,st:0',
      alt: 'YouTube',
      width: '150',
      height: '150'
    }
  ];

  return (
    <div className={`links-container ${className}`}>
      {links.map((button, index) => (
        <a href={button.link} target='_blank'>
          <img 
            src={button.image}
            alt={button.alt}
            width={button.width ? button.width : '100'}
            height={button.height ? button.height : '100'}
            className='link-button'
          />
        </a>
      ))}
    </div>
  );
}

export default LinkButtons;
