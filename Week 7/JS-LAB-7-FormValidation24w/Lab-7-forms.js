/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

window.onload = function (){
	var formHandle = document.forms.form_ship;	
	var nameValue = formHandle.f_Name;
	var pcValue = formHandle.f_pc;
	var shipValue = formHandle.f_speed;

function processForm(){
	//alert("form submitted");
	if (shipValue.value === "0"){
		shipValue.style.background = "red";
		shipValue.focus();
		//console.log("Invalid shipping")
		return false;
	}
	else if(nameValue.value === ""){
		nameValue.style.background = "red";
		nameValue.focus();
		//console.log("Invalid name");
		return false;
	} else if(pcValue.value === ""){
		pcValue.style.background = "red";
		//console.log("Invalid postal code");
		pcValue.focus();
		return false;
	}
	submitMsg = document.getElementById("thanks_msg");
	submitMsg.style.display = "inline";
	formHandle.style.display = "none";
	thanksName = document.getElementById("thanksCustomer");
	thanksName.innerHTML = nameValue.value;
	thanksCode = document.getElementById("thanksPC");
	thanksCode.innerHTML = pcValue.value;
	thanksShip = document.getElementById("thanksSpeed");
	thanksShip.innerHTML = shipValue.options[shipValue.selectedIndex].text;
	shipCost = document.getElementById("thanksCost");
	shipCost.innerHTML = shipValue.value;
	return false;
	
}


//LISTENERS
formHandle.onsubmit = processForm;
}