//HTTP5122 Front-End Web Development 
//Assignment 2 Movie Array
//Deryn Boscariol - N01667427

// Declaring and initializing variables
var movie1 = "Love Actually";
var movie2 = "Baby Driver";
var movie3 = "Step Brothers";
var movie4 = "Barbie";
var movie5 = "Airplane";
var movie6 = "Inglorious Bastards";
var movie7 = "Best in Show";
var result;
var userInput;
var moviePick;

//Creating an array to hold variables
var movieArray = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

//Creating a while loop so the question will rerun if the user enters anything other than a number 1-7
while (result !== true) {

//Asking the user which top 7 movie number they would like to pick
var userInput = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");

//Validating user input
if (userInput >= 1 && userInput <= 7) {
    var moviePick = movieArray[userInput - 1];

//Sending the user a pop-up saying what number and movie they have chosen    
alert("Number " + userInput + " on the list is " + moviePick);
result = true;
} 

//An invalid user input will result in an error message
else {
    alert("Please enter a number between 1 and 7!");
    result = false;
}
}

//Output messsage to console with a loop reading through all the movies
for (i = 0; i <= 6; i++) 
{
    console.log("Movie " + (i+1) + ": " + movieArray[i]);
}

