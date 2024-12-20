import "./Countdown.css";
import { useState, useEffect, useRef } from "react";

function Countdown() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const inputRef = useRef(null); // Use ref for input field

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup timer on unmount or when dependencies change
  }, [isRunning, time]);

  function startTimer() {
    setIsRunning(true);
  }

  function resetTimer() {
    setIsRunning(false);

    // Get value from input and validate
    const newTime = parseInt(inputRef.current.value, 10);
    if (!isNaN(newTime) && newTime > 0) {
      setTime(newTime);
    } else {
      alert("Please enter a valid number greater than 0");
    }
  }

  return (
    <div className="contain">
      <h1>Countdown Timer</h1>
      <h1>{time}</h1>
      <input
        type="text"
        placeholder="Enter Seconds"
        id="text"
        ref={inputRef} // Attach ref to input
      />
      <br />
      <div>
      <button onClick={startTimer} className="startbutton">
        Start
      </button>
      <button onClick={resetTimer} className="startbutton">
        Reset
      </button>
      </div>
    </div>
  );
}

export default Countdown;
