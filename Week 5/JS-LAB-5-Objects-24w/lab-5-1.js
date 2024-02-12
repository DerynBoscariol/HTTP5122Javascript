//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    name: "Deryn",
    age: 25,
    favBand: "Arctic Monkeys",
    favMovie: "Baby Driver",
    sayNameSayMovie: function (){
        alert("My name is " + meObject.name + " and my favourite movie is " + meObject.favMovie + ".");
    }
}

console.log(meObject.favBand);
//alert("My name is " + meObject.name + " and my favourite movie is " + meObject.favMovie + ".");

meObject.sayNameSayMovie();