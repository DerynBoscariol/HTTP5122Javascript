$(window).on("load", function() {

//Creating a variable to select the form
var formHandle = document.forms.ingredients;

//Function to process form
function processForm(){
    //Making sure all of my recipie divs are hidden
    $("#gin-tonic, #gin-orange, #vodka-tonic, #vodka-orange, #rum-cola, #rum-tonic, #margarita, #teq-sunrise, #long-island, #no-cocktail").hide();

    //Creating an array of the values of the checked off checkboxes for the liquor selections
    let liquorArray = $("input:checkbox[name=liquorInput]:checked")
                .map(function (){
                return $(this).val();
            }).toArray();
    //Creating an array of the values of the checked off checkboxes for the mix selections
    let mixArray = $("input:checkbox[name=mixInput]:checked")
            .map(function (){
            return $(this).val();
        }).toArray();

    console.log(liquorArray);
    console.log(mixArray);
    //Creating an array to hold the cocktails that can be made with the selected ingredients   
    var cocktailResults = [];

//Gin Recipes 
    //If gin is in the liquor array and orange is in the mix array...
    if (liquorArray.includes("gin") && mixArray.includes("orange")){
        //Add gin-orange (id of the div containg the gin and juice recipe) to the cocktail results array
        cocktailResults.push("gin-orange");
//Repeat this logic for each drink combination
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
//Long-Island Iced Tea Recipe
    if (liquorArray.includes("tequila") && liquorArray.includes("rum") && liquorArray.includes("gin") && liquorArray.includes("vodka") && liquorArray.includes("orangeLiq") && mixArray.includes("lemon") && mixArray.includes("cola")) {
        cocktailResults.push("long-island");
    }
//If there is nothing in the cocktailResults array (none of the selected ingredients form a drink) show the no cocktail available div
    if (cocktailResults.length === 0){
        $("#no-cocktail").show();
    }
    console.log(cocktailResults);

//For each item in the cocktailResults array, change the display style to block
   for (i = 0; i < cocktailResults.length; i+=1){
        document.getElementById(cocktailResults[i]).style.display = "block";
    } 
      
    console.log(cocktailResults[cocktailResults.length]);
//Return false so we can still see the selections in the form and the results after the form is submitted
    return false;
}
//Event listener for form submission
formHandle.onsubmit = processForm;

})