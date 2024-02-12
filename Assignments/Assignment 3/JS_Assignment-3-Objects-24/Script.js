// DERYN BOSCARIOL - Asssignment 3 - 3.5 hours

// Making my object and assigning intial properties
var recordCollection = {
    favRecord: "Tommy by The Who",
    totalRecords: 83,
    usedRecords: 36,
    newRecords: 47,
// Making my function which will change the value of the users favourite record
    changeFavRecord: function(newFav){
        this.favRecord = newFav;
        alert("Your favourite album is " + newFav +"!");
    },

 /* I originally misinterpreted the second part of this assignment and thought we had to make another method that updated two properties, 
    so I made the method below which would ask users for the price and the condition of the record they wanted to add to their collection and
    use that information to update the total value of the collection as well as the number of used/new records and the total number of records. 
    I really liked how this turned out so I decided to leave it here commented out. 

    totalValue: 2021.50,
    addRecord: function() {
        this.totalRecords = this.totalRecords + 1;

        price = prompt("What is the price?");
        isNaN(price)
            while (isNaN(price)){
                price = prompt("What is the price?");}
        this.totalValue = this.totalValue + Number(price);
        
        condition = prompt("Is the record new or used?");
        switch(condition) {
            default:
                condition = prompt("Please enter 'New' or 'Used'");
            case "new" ||  "New":
                this.newRecords = this.newRecords + 1;
              break;
            case "Used" || "used":
                this.usedRecords = this.usedRecords + 1;
              break;
          }

} */
}
// Logging my object in the console
console.log(recordCollection);

//Making the first pop-up which will add used records into the user's collection 
var addUsed = prompt("How many used condition records would you like to add to your collection?", "Current used records: " + recordCollection.usedRecords);
//Using a while loop to validate that the user is inputing a number and isn't inputing a null or blank value
    while (isNaN(addUsed)|| addUsed === null || addUsed === "" || addUsed === " "){
        alert("Please enter a number!");
        addUsed = prompt("How many used condition records would you like to add to your collection?", "Current used records: " + recordCollection.usedRecords);
    }
//Adding the inputed number to the number of used records as well as the total records
    recordCollection.usedRecords = recordCollection.usedRecords + Number(addUsed);
    recordCollection.totalRecords = recordCollection.totalRecords + Number(addUsed);
    
//Making the second pop-up which will add new records into the user's collection         
var addNew = prompt("How many new condition records would you like to add to your collection?", "Current new records: " + recordCollection.newRecords);
//Using a while loop to validate that the user is inputing a number and isn't inputing a null or blank value
        while (isNaN(addNew)|| addNew === null || addNew === ""|| addNew === " "){
            alert("Please enter a number!");
            addNew = prompt("How many new condition records would you like to add to your collection?", "Current new records: " + recordCollection.newRecords);
        }
//Adding the inputed number to the number of new records as well as the total records
    recordCollection.newRecords = recordCollection.newRecords + Number(addNew);
    recordCollection.totalRecords = recordCollection.totalRecords + Number(addNew);

//Calling the object method to change the user's favourite record
recordCollection.changeFavRecord("Parallels by Blondie");

//recordCollection.addRecord();

//outputing to the console
console.log(recordCollection);