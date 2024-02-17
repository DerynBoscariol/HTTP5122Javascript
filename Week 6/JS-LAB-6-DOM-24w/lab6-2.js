//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageLoaded;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageLoaded(){
	//GET DOM ELEMENTS WE'LL NEED
var mysteryBox = document.getElementById("mysteryBox");
var buttonBox = document.getElementById("buttonBox");

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
function mysteryAsk(){
var	userAnswer = confirm("Do you want to see something?");
	if (userAnswer === true){
		mysteryBox.style.display = "none";
		buttonBox.style.display = "block";
	} 
}
	//FUNCTION TO CHANGE buttonBox
function surprise(){
	buttonBox.style.width = "600px";
	buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
	buttonBox.style.backgroundColor = "orange";

}

	//SETUP LISTENERS
mysteryBox.onmouseover = mysteryAsk;
buttonBox.onclick = surprise;

}//END onload FUNCTION