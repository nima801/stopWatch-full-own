import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import Timesubmit from './timeSub';

let Timer = ({timeArr,setTimeArr,isLight,setIsLight}) => {
  let [sec, setSec] = useState(0); // Use Number instead of string
  let [min, setMin] = useState(0);
  let intervalRef = useRef(null); // برای جلوگیری از چندین تایمر

  let handlesecond = () => {
    if (intervalRef.current) return; // جلوگیری از چندبار استارت

    intervalRef.current = setInterval(() => {
      setSec(prevSec => {
        if (prevSec === 59) {
          setMin(prevMin => prevMin + 1);
          return 0;
        }
        return prevSec + 1;
      });
    }, 1000);
  };

  let handlestop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  let handlereset = () => {
    handlestop();
    setSec(0);
    setMin(0);
  };

  const getRealTime = () => {
  let newSec = String(sec).padStart(2, '0');
  let newMin = String(min).padStart(2, '0');
  let newTime = `${newMin} : ${newSec}`;
  setTimeArr(prev => [...prev, newTime]); 
  console.log(newTime);
};

let DLmode = ()=>{
    setIsLight(!isLight);
}


  return (
<>
    <div className='timer-box'>
      <div className='time' onClick={getRealTime}>
        <span>{String(min).padStart(2, '0')}</span>:
        <span>{String(sec).padStart(2, '0')}</span>
      </div>
      <div className='btn-group'>
        <button onClick={handlesecond}>Start</button>
        <button onClick={handlestop}>Stop</button>
        <button onClick={handlereset}>Reset</button>
        <button onClick={DLmode}
         style={{background : isLight ? "black" : "white" ,
         color : isLight ? "white" : "black"}}>

            {isLight ? "dark" : "light"}
        </button>
      </div>
    </div>
       
</>
  );
};

export default Timer;
