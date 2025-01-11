import "../styles/LinkButtons.css";
import "../styles/FibonnaciHome.css";
import { useRef, useEffect } from "react";

function LinkButtons() {
  const links = [
    {
      image: "x.jpg",
      link: "https://x.com/f1bonacc1s3q",
      alt: "X Account",
    },
    {
      image: "/pump.webp",
      link: "https://pump.fun/board",
      alt: "PumpFun",
    },
    {
      image: "/dex.svg",
      link: "https://dexscreener.com/",
      alt: "Dex",
    },
  ];

  return (
    <div className={`links-container navbar`}>
      {links.map((button, index) => (
        <a href={button.link} target="_blank">
          <img
            src={button.image}
            alt={button.alt}
            width={button.width ? button.width : "100"}
            height={button.height ? button.height : "100"}
            className={button.alt === "link-button" ? "" : "link-button"}
          />
        </a>
      ))}
    </div>
  );
}

export default LinkButtons;
