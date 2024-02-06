//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will determine whether or not it is above 30 or below -10
//It expects to receive currentTemp as a number
//It will return true or false

function checkTemp (currentTemp){
    if(currentTemp > 30){
        return false;
    }

    if(currentTemp < -10){
        return false;
    }

    else {
        return true;
    }
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

userTemp = prompt("What is the current temperature?")

if (checkTemp (userTemp) === false){
    alert("Yikes! This is no weather for dog walking!");
}
else {
    alert("You're good, have a nice walk!");
}
