/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = pageLoaded;
//create page load function
function pageLoaded(){
	//create variables for required HTML elements
	var hoursDisplay = document.getElementById("hoursOut");
	var minsDisplay = document.getElementById("minsOut");
	var secsDisplay = document.getElementById("secsOut");
	var startBtn = document.getElementById("btnStart");
	var stopBtn = document.getElementById("btnStop");
	//create time variable so all functions have access to it
	var updateDisplayTime;
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime(){
		var currentTime = new Date();
		var currentHours = currentTime.getHours();
		var currentMins = currentTime.getMinutes();
		var currentSecs = currentTime.getSeconds();
		hoursDisplay.innerHTML = currentHours.toString().padStart(2,"0") + ":";
		minsDisplay.innerHTML = currentMins.toString().padStart(2,"0") + ":";
		secsDisplay.innerHTML = currentSecs.toString().padStart(2,"0");
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	function startClock(){
		updateDisplayTime  = setInterval(displayTime, 1000);
	}
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock(){
		clearInterval(updateDisplayTime);
	}
	
	// SET EVENT LISTENERS
	startBtn.onclick = startClock;
	stopBtn.onclick = stopClock;
}