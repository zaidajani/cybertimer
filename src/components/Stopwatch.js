import React from "react";

const App = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {/* {!timerOn && time === 0 && (
          <button
            onKeyUp={(e) => {
              if (e.key === " " || e.key === "Enter") {
                setTimerOn(true);
                console.log('key pressed');
              }
            }}
          >
            Start
          </button>
        )}
        {timerOn && (
          <button
            onKeyUp={(e) => {
              if (e.key === " " || e.key === "Spacebar") {
                console.log('key pressed');
                setTimerOn(false);
              }
            }}
          >
            Stop
          </button>
        )} */}
      </div>
    </div>
  );
};

export default App;

// setTimerOn(false)
