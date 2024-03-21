//LAB 9-DATA STORAGE: PRODUCT PAGE
window.onload = loadComplete

function loadComplete(){
    var nameOut = document.getElementById("MesgBox");
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