import "../styles/FibonnaciHome.css";
import CursorTrail from "./CursorTrail";
import SoundBar from "./SoundBar";
import FadingImages from "./FadingImages";
import { useState, useEffect } from "react";
import LineUp from "./LineUp";
import LinkButtons from "./LinkButtons";
import Terminal from "./Terminal";

function FibonnaciHome() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const text = "Explore The Fibonacci Sequence";
  const animatedText = text.split("").map((char, index) => (
    <span
      key={index}
      style={{ "--i": index }}
      className={` $char === " " ? "space" : "" `}
    >
      {char}
    </span>
  ));

  return (
    <div className="app-background">
      <div className="app-header">
        <SoundBar />
      </div>
      <div className="typewriter-content">
        <h1 className="welcome-sign">{animatedText}</h1>
      </div>
      <CursorTrail />
      <FadingImages />
      <Terminal />
      <div className="fill"/>
      {!isMobile && <LineUp />}
      <LinkButtons />
    </div>
  );
}

export default FibonnaciHome;
