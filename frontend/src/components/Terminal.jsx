import "../styles/Terminal.css";
import { useState, useEffect, useRef } from "react";
import getResponse from "../utils/responses";
import { fetchAnswer } from "../utils/api";
import TypingEffect from "./TypingEffect";

function Terminal() {
  const [history, setHistory] = useState([
    {
      command: "Welcome to FibonacciAI, here are the available commands",
      response: getResponse("help"),
    },
  ]);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [thinking, setThinking] = useState();
  const fiftyFib = [
    "0",
    "1",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "21",
    "34",
    "55",
    "89",
    "144",
    "233",
    "377",
    "610",
    "987",
    "1597",
    "2584",
    "4181",
    "6765",
    "10946",
    "17711",
    "28657",
    "46368",
    "75025",
    "121393",
    "196418",
    "317811",
    "514229",
    "832040",
    "1346269",
    "2178309",
    "3524578",
    "5702887",
    "9227465",
    "14930352",
    "24157817",
    "39088169",
    "63245986",
    "102334155",
    "165580141",
    "267914296",
    "433494437",
    "701408733",
    "1134903170",
    "1836311903",
    "2971215073",
    "4807526976",
    "7778742049",
    "Fibonacci Sequence has ended, use the command /fib to restart",
  ];

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  const switchForHistory = (value) => {
    setHistory([
      ...history,
      {
        command: value,
        response: getResponse(value),
      },
    ]);
  };

  const handleTermClick = () => {
    inputRef.current.focus();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value === "clear") {
      setHistory([]);
    } else if (value === "fib") {
      setHistory([
        ...history,
        {
          command: value,
          response: fiftyFib[count],
        },
      ]);
      if (count !== 50) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    } else if (value === "youngfib") {
      setHistory([
        ...history,
        {
          command: value,
          response: Array(3)
            .fill(
              <img
                src="/youngfib.png"
                alt="Young Fibonacci"
                className="youngfib-img"
              />,
            )
            .map((item, index) => <span key={index}>{item}</span>),
        },
      ]);
    } else if (value.split(" ")[0] === "ask") {
      const splitAsk = value.split(" ");
      if (splitAsk.length > 1) {
        setThinking(true);
        const result = await fetchAnswer(
          value.substring(value.indexOf(" ") + 1),
        );
        setHistory([
          ...history,
          {
            command: value,
            response: result,
          },
        ]);
        setThinking(false);
      } else {
        switchForHistory(value);
      }
    } else {
      switchForHistory(value);
    }
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="terminal" onClick={handleTermClick}>
      {history.map((entry, index) => (
        <div key={index}>
          <div>➜ {entry.command}</div>
          <div className="response">
            <TypingEffect text={entry.response} />
          </div>
        </div>
      ))}

      <div ref={terminalEndRef} />
      <div className="input-container">
        <span>➜ ~/ </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            readOnly={thinking}
          />
        </form>
      </div>
      {thinking && <span className="thinking-animation">Thinking...</span>}
    </div>
  );
}

export default Terminal;
