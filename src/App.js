import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    recordedTimes,
    handleRecord,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={handleRecord}>
            Record
          </button>
        </div>
        <div className="record">
          {recordedTimes.map((recordedTime, index) => (
            <h3 key={index}>
              [{index + 1}] {recordedTime}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
