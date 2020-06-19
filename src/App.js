import React, { useState } from 'react';
import Ali from './Message.js'
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1> Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Ali counter={count} />
      <br />
      <button onClick={() => setCount(++count)}>
        Update Counter
      </button>


      <button onClick={() => setCount(0)}>Reset Counter</button>
      <h6>      </h6>
      <h2>  Change Background</h2>
      <button onClick={() => setMorning(!isMorning)}> Update Day</button>
    </div>

  );
}

export default App;