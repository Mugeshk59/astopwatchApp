import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes.toString().padStart(1, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">Time: {formatTime(time)}</div>
      <div className="buttons">
        <button onClick={startStopwatch}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default App;
