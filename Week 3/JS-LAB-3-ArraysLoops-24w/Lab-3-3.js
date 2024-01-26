//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var userCart = [];
var userInput;
var numPrice;
var runTotal = 0;
var freeShip = 35;


//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
	while (runTotal < freeShip){


	//GET ITEM COST FROM USER
	userInput = prompt("What is the price of your item?")

	
	//CONVERT USER INPUT TO A NUMBER
	var numPrice = parseInt(userInput);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	runTotal = numPrice + runTotal;
	
	//PUSH ITEM COST TO CART ARRAY
	
	userCart.push(numPrice);
	
console.log(userCart);
}
//SEND POPUP MESSAGE TO USER
alert("The shipping for this order will be free! Your prices are: " + userCart);

//SEND OUTPUT TO CONSOLE

console.log("Item prices: " + (userCart.join(" | ")));