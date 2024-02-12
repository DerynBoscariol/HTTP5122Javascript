//JavaScript Assignment 1 - Group Login - Deryn Boscariol - n01667427



//Define variables
var messageDenied = "The information you provided was not valid. Access denied!";
var fullName;
var firstName;
var groupNum;
// Make a pop-up asking what the user's group number is
var groupNum = prompt("What is your group number?");
//If the number is not 4 send a pop up that tells the user they are denied access
if (groupNum !== "4") {
   alert(messageDenied);
}
//If the user provides the number 4 they will see a pop-up asking for their first name
 else {
    var firstName = prompt("What is your first name?");
// Empty or null values will prompt an alert saying the user needs to provide their name
    if (firstName === "" || firstName === null) {
        alert("You need to enter your first name to gain access");
    }
     else {
//If the user's first name is in my group list they will be greeted with a pop up using their full name
    switch (firstName.toLowerCase()) {
        case "reddy":
            alert("Welcome Reddy Nagendra Reddy Darsha!");
            break;
        case "kathan":
            alert("Welcome Kathan Patel!");
            break;
        case "aishwarya":
            alert("Welcome Aishwarya Rajnikant Thakkar!");
            break;
        case "karishma":
            alert("Welcome Karishma Patel!");
            break;
 //If their name does not match one of the ones in the list the user will see an "access denied" message     
        default:
            alert(messageDenied);
            break;
    }
    }
}

