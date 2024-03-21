//LAB 9-DATA STORAGE: HOME PAGE
//window.onload
window.onload = loadComplete;

function loadComplete(){
    var nameOut = document.getElementById("newMsgBox");
    //check for stored values

        //retrieve stored values
        var userFName = localStorage.getItem("userName");
        var userColour = localStorage.getItem("colour");
        //change welcome text to stored name
        if(userFName !== null){
        nameOut.innerHTML = "Welcome " + userFName + "!";
        }
        if(userColour !== null){
        //change BG colour to stored colour
        document.body.style.background = userColour;
    } 
}

var deleteBtn = document.getElementById("btnDel")
deleteBtn.onclick = deleteStorage;

function deleteStorage(){
    localStorage.clear();
    location.reload();
}

//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	formHandle = document.forms.infoForm;
	
    formHandle.onsubmit = getForm;
	//onsubmit Function
   function getForm(){
        //get values from form
		var userName = document.getElementById("inName");
        var userNameValue = userName.value;
        var favColour = document.getElementById("inColour");
        var favColourValue = favColour.value;
		
		//console.log the form values
        console.log(userNameValue);
        console.log(favColourValue);
        
        //store values
        localStorage.setItem("colour", favColourValue);
        localStorage.setItem("userName", userNameValue);

        }

    
    