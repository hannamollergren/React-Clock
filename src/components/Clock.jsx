import React, { useState, useEffect } from 'react';

const Clock = () => {
	const [time, setTime] = useState(null);

	// Körs en gång, när komonenten blir renderad 
	useEffect(() => { 
		// Starta prenumeration: hämta aktuell tid varje sekund
		let intervalId = setInterval(() => {
			let newTime = getTime();
			
			setTime(newTime);
		}) 

		// Skapa en funktion som kan avsluta prenumationen
		return () => {
			clearInterval(intervalId)
		}

	}, [])

	return (
		<div>
			<h2 className="time">What time is it? </h2>
			<h3>{ time }</h3>
		</div>
	)
}

function getTime(){
	let date = new Date();
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
	
}


export default Clock;