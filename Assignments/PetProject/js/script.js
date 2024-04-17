$(window).on("load", function() {

var formHandle = document.forms.ingredients;

formHandle.onsubmit = processForm;
function processForm(){
    $("#gin-tonic, #gin-orange, #vodka-tonic, #vodka-orange, #rum-cola, #rum-tonic, #margarita, #teq-sunrise, #no-cocktail").hide();
    let liquorArray = $("input:checkbox[name=liquorInput]:checked")
                .map(function (){
                return $(this).val();
            }).toArray();
    let mixArray = $("input:checkbox[name=mixInput]:checked")
            .map(function (){
            return $(this).val();
        }).toArray();
    console.log(liquorArray);
    console.log(mixArray);

    var cocktailResults = [];
//Gin Recipes 
if (liquorArray.includes("gin") && mixArray.includes("orange")){
    cocktailResults.push("gin-orange");
} if (liquorArray.includes("gin") && mixArray.includes("tonic")) {
    cocktailResults.push("gin-tonic");
//Vodka Recipes
} if (liquorArray.includes("vodka") && mixArray.includes("tonic")) {
    cocktailResults.push("vodka-tonic");
} if (liquorArray.includes("vodka") && mixArray.includes("orange")) {
    cocktailResults.push("vodka-orange");
//Rum Recipes
} if (liquorArray.includes("rum") && mixArray.includes("cola")) {
    cocktailResults.push("rum-cola");
} if (liquorArray.includes("rum") && mixArray.includes("tonic")) {
    cocktailResults.push("rum-tonic");
}
//Tequila Recipes
if (liquorArray.includes("tequila") && liquorArray.includes("orangeLiq") && mixArray.includes("lime")) {
    cocktailResults.push("margarita");
} if (liquorArray.includes("tequila") && mixArray.includes("orange") && mixArray.includes("grenadine")) {
    cocktailResults.push("teq-sunrise");
}

if (cocktailResults.length === 0){
    $("#no-cocktail").show();
}
    console.log(cocktailResults);

   for (i = 0; i < cocktailResults.length; i+=1){
        document.getElementById(cocktailResults[i]).style.display = "block";
    } 
      
    console.log(cocktailResults[cocktailResults.length]);
    return false;
}

})