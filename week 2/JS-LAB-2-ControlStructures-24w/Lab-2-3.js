//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userEmail;
var userAnswer;
var invalid = "Thank you, but your email was not valid."
var decline = "Thank you, we will not bother you again."
var success = "Thank you, our next email will be sent to "


//==== LOGIC =============
//1. Create pop-up asking if they'd like to sign up
var userAnswer = confirm("Would you like to join our mailing list");

//2. if they say yes
if(userAnswer === true){
var userEmail = prompt("Please enter your email:", "me@example.com");
//3. Send an error message if empty, null, or default text
if(userEmail === "" || userEmail === null || userEmail === "me@example.com"){
    alert(invalid);
}
//4. If the user sucessfullly enters email
else{
    alert(success + userEmail + ".");
}
}
//5. If the user declines
 else {
    alert(decline);
 }


