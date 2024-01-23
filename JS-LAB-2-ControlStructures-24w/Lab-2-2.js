//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
	var userName = "dart"	// Correct user name
	var password = "vader"	// Correct password
	var userInput;	// user name input
	var pwdInput;	// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var userInput = prompt("Please enter your username:");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Username:" + userInput);
//5. CREATE POPUP BOX FOR PASSWORD
var pwdInput = prompt("Please enter your password:")
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Password:" + pwdInput);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(userInput === userName && pwdInput === password){
	
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
	alert("Welcome back" + " " + userName);
	console.log("Login sucessful");
}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else {
	alert("Invalid username/password");
	console.log("Login fail");
}