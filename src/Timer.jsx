import React, { useEffect, useState } from "react";
import "./styles.css";
const Timer = () => {
  const [running, setrunning] = useState(false);
  const [paused, setpaused] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timer = "";
    console.log(running);
    if (running && paused === false) {
      timer = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running, paused]);

  const start = () => {
    setrunning(true);
    setpaused(false);
  };

  const reset = () => {
    setrunning(false);
    setTime(0);
  };

  const pauseresume = () => {
    setpaused(!paused);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        "justify-content": "space - between",
        margin: "12px"
      }}
    >
      <div style={{ display: "flex", "justify-content": "normal", flex: 1 }}>
        <div className="comp">
          <span>0{Math.floor((time / 60000) % 60)}</span>
        </div>
        <div className="comp">
          <span>{Math.floor((time / 1000) % 60)}</span>
        </div>
        <div className="comp">
          <span>0{Math.floor(time / 100) % 10}</span>
        </div>
      </div>
      <div style={{}}>
        {!running && (
          <div>
            <button onClick={start}>start</button>
          </div>
        )}
        {running && (
          <div>
            <button onClick={reset}>reset</button>
            <button onClick={pauseresume}>{paused ? "resume" : "pause"}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timer;
