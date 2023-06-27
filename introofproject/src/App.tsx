import React, {useEffect, useState} from 'react';
import './App.css';

interface CountDownProps {
  typeOfText: string;
  innerNumber: string;
}

function CountDown(props: CountDownProps) {
  return (
    <div className='CountDown'>
      <div className='CountDownNumber'>{props.innerNumber}</div>
      <p className='CountDownText'>{props.typeOfText}</p>
    </div>
  );
}


function CountDownWrap() {
  const [day, setDay] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  function getGap() {
    let rightNow = new Date();
    let targetDate = new Date('2023-09-08T00:00:00');
    let gap = targetDate.getTime() - rightNow.getTime();
    const day = Math.floor(gap/(1000*60*60*24));
    const hours = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((gap % (1000*60*60))/(1000*60));
    const seconds = Math.floor((gap % (1000*60))/1000);
    setDay(day.toString());
    setHours(hours.toString().padStart(2, '0'));
    setMinutes(minutes.toString().padStart(2, '0'));
    setSeconds(seconds.toString().padStart(2, '0'));
  }

  useEffect(() => {
    getGap();
    setInterval(() => {
      getGap();
  }, 1000);
  }, []);
  return (
    <div className='CountDownWrap'>
      <CountDown typeOfText = 'DAYS' innerNumber = {day} />
      <CountDown typeOfText = 'HOURS' innerNumber = {hours} />
      <CountDown typeOfText = 'MINUTES' innerNumber = {minutes} />
      <CountDown typeOfText = 'SECONDS' innerNumber = {seconds} />
    </div>
  );
}

function MainTextWrap() {
  return (
    <div className='MainTextWrap'>
      <p>Dwelling Days</p>
      <CountDownWrap />
      <p>Left To Begin</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className='BackGroundImage'>
      </div>
      <div className="App">
        <MainTextWrap />
      </div>
    </div>
  );
}

export default App;
