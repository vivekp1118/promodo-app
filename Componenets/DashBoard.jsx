import React, { useState, useEffect } from 'react';
import { AuthContext } from '../src/Context';
import { Navigate } from 'react-router';
function DashBoard() {
  const {isLogined,setLogin}= React.useContext(AuthContext);
  console.log(isLogined)
  const [workTime, setWorkTime] = useState(25 * 60);
  const [timer, setTimer] = useState("Promodo");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && workTime > 0) {
      interval = setInterval(() => {
        setWorkTime(prevTime => prevTime - 1);
      }, 1000);

    } else if (isActive && workTime === 0) {
      if(workTime === 0 && timer === "Promodo"){
        setTimer("Break");
        setWorkTime (5 * 60);
      }
      else{
          clearInterval(interval);
          setWorkTime(25 * 60);
          setTimeout(() => {
            setIsActive(false);
            setTimer("Promodo");
          }, 1000);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, workTime]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer("Promodo");
    setWorkTime(25 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
        {
            isLogined ? 
                <div className="">
                <h1>{timer} Timer</h1>
                <div className="timer">
                  <div className="time">{formatTime(workTime)}</div>
                  <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
                  <button onClick={resetTimer}>Reset</button>
                </div>
              </div>
             :<Navigate to={"/Login"} />
                
        }
      
    </>
  );
}

export default DashBoard;
