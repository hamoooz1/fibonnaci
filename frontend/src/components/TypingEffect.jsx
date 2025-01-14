import { useState, useEffect } from "react";

function TypingEffect({ text, speed = 12 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Clear any previous text on re-render.

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // Set the text slice directly.
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on unmount.
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default TypingEffect;

