//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function avgMark(mark1, mark2, mark3, mark4, mark5){
    var average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
    return average.toFixed(1);

}

console.log ("Average mark is: " + avgMark(5, 10, 15, 20, 25));

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var course1 = 80;
var course2 = 85;
var course3 = 60;
var course4 = 79;
var course5 = 66;

var myAvg = avgMark(course1, course2, course3, course4, course5);

if (myAvg >= 70){
    alert("Congrats! Keep up the good work!");
}
else {
    alert("Review required");
}