import React, {useEffect, useState, useRef} from "react";

function StopWatch() {
    
    const [isRunning, setIsRunning] = useState(false);
    const [elaspedTime, setElaspedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const StartTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElaspedTime(Date.now() - StartTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);
 
    function start() {
        setIsRunning(true);
        StartTimeRef.current = Date.now() - elaspedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setElaspedTime(0);

    }

    function formatTime() {
        let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elaspedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elaspedTime / (1000) % 60);
        let milliseconds = Math.floor(elaspedTime % 1000 / 10);

        hours = hours.toString().padStart(2, "0");
        minutes = minutes.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
        milliseconds = milliseconds.toString().padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return (
        <div className="stopwatch">
            <div className="stopwatch-display">
                {formatTime()}
            </div>
            <div className="stopwatch-btns">
                <button className="start-btn" onClick={start}>Start</button>
                <button className="stop-btn" onClick={stop}>Stop</button>
                <button className="reset-btn" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;