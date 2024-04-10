window.onload = function() {

var formHandle = document.forms.ingredients;

formHandle.onsubmit = processForm;
function processForm(){

    var liquorSelect = formHandle.liquorInput.value;
    var mixSelect = formHandle.mixInput.value;
    console.log(liquorSelect);
    console.log(mixSelect);

    if (liquorSelect === "gin" && mixSelect === "orange"){
        document.getElementById("gin-orange").style.display = "block";
        document.getElementById("gin-tonic").style.display = "none";
        document.getElementById("vodka-tonic").style.display = "none";
        document.getElementById("vodka-orange").style.display = "none";

    } else if (liquorSelect === "gin" && mixSelect === "tonic"){
        document.getElementById("gin-tonic").style.display = "block";
        document.getElementById("gin-orange").style.display = "none";
        document.getElementById("vodka-tonic").style.display = "none";
        document.getElementById("vodka-orange").style.display = "none";

    } else if (liquorSelect === "vodka" && mixSelect === "tonic"){
        document.getElementById("vodka-tonic").style.display = "block";
        document.getElementById("gin-orange").style.display = "none";
        document.getElementById("gin-tonic").style.display = "none";
        document.getElementById("vodka-orange").style.display = "none";

    } else if (liquorSelect === "vodka" && mixSelect === "orange"){
        document.getElementById("vodka-orange").style.display = "block";
        document.getElementById("gin-orange").style.display = "none";
        document.getElementById("gin-tonic").style.display = "none";
        document.getElementById("vodka-tonic").style.display = "none";
    } 
    return false;
}

}