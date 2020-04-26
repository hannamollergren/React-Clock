import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock'

function App() {
	const [showClock, setShowClock] = useState(true);
	let maybeClock = null;

	if(showClock){
		maybeClock = <Clock/>
	}
  return (
    <div className="App">
	  <main>
		  	<button className="toggle" onClick={() => setShowClock(!showClock)}>Toggle clock</button>
			{maybeClock}
	  </main>
    </div>
  );
}

export default App;
