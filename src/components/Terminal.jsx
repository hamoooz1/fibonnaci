import "../styles/Terminal.css";
import { useState } from "react";
import { useRef } from "react";
function Terminal() {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  //use as example
  const [curr, setCurr] = useState("");

  const handleTermClick = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
    setCurr(curr + "skib");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  return (
    <div className="terminal" onClick={handleTermClick}>
      {/* <History /> */}
      <span>{curr}</span>
      <div className="input-container">
        <span>➜ ~/ </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
