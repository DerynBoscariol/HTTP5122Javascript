/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = pageLoaded;
//create page load function
function pageLoaded(){

	//create variables for required HTML elements
	var todayDateOutput = document.getElementById("todayData");
	var dueDateOutput = document.getElementById("finalData");
	var daysTillDueOutput = document.getElementById("dueData");
	var passedMessage = document.getElementById("countMsg");
	//create variables for now date and due date
	var dateStamp = new Date();
	var todayDate = dateStamp.toDateString();
	var dueDateStamp = new Date("April 19, 2023 18:00");
	var dueDate = dueDateStamp.toDateString();
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayDateOutput.innerHTML = todayDate;
	dueDateOutput.innerHTML = dueDate;
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var todayDateUTC = dateStamp.getTime();
	var dueDateUTC = dueDateStamp.getTime();
	var diffUTC = dueDateUTC - todayDateUTC;
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var daysTillDue = diffUTC/86400000;
	var fullDaysTillDue = Math.floor(daysTillDue);
	daysTillDueOutput.innerHTML = fullDaysTillDue;
	console.log(daysTillDue);
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if (daysTillDue <= 0){
		passedMessage.innerHTML = "The deadline for the final assignment has passed!";
	}
}