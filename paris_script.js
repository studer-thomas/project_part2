
	"use strict";
/*
   
	I'd Rather Be In Paris
	Paris Countdown Clock
	Author: Thomas Studer
	Date:   April 27, 2024

*/
	window.alert("Welcome to Paris!");											/*Send an alert using JavaScript*/

/*Execute the function to run and display the countdown clock*/			
runClock();																		/*Create and call a JavaScript function that keeps track of current day and time*/
setInterval("runClock()", 1000);												/*Run a command at a specified interval*/

/*Function to create and run the countdown clock*/
function runClock(){															/*Include a countdown function*/
																				/*Create and call a JavaScript function that keeps track of current day and time*/
/*Store the current date and time*/
	var currentDay = new Date();												
	var dateStr = currentDay.toLocaleDateString();								/*Convert between a number and a text*/
	var timeStr = currentDay.toLocaleTimeString();

/*Display the current date and time*/
	document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;   /*Here is the id dateNow from line 41 in HTML*/
																					/*Create and call a JavaScript function that keeps track of current day and time*/
/*Calculate the days until January 1st */
	var newYear = new Date("January 1, 2022");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);
	
/*Calculate the hours left in the current day*/
	var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
	
/*Calculate the minutes and seconds left in the current hour*/
	var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;							/*Use a Math method*/
	var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
	
/*Display the time left until New Year's Eve*/
	document.getElementById("days").textContent = Math.floor(daysLeft);				/*Include a countdown function*/
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);				/*Use a Math method to round the value down to the next lowest integer*/
	document.getElementById("secs").textContent = Math.floor(secsLeft);
	

}