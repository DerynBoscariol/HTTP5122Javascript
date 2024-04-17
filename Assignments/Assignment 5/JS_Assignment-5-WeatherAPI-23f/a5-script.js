
window.onload = function (){

// Getting elemts from HTML
    var outCity = document.getElementById("location");
    var outIcon = document.getElementById("icon");
    var outTemp = document.getElementById("temperature");
    var outCond = document.getElementById("conditions");
    var outShow = document.getElementById("output");
    var outWind = document.getElementById("wind");
    var cities = document.getElementsByClassName("cities");

// Creating variable for my api key
    var APIkey = "2209f6bba4a141895a02712c26acd348";

  
    function showCity(cityName){
    // Concated URL for api
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + APIkey + "&units=metric";
    // Displaying output section
    outShow.style.display = "block";
    // Creating new xml request ans specifying json response
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "json";
    xhr.send(null);
    
    // When there is a change in the ready state...
    xhr.onreadystatechange = function (){
        // If ready state has completed...
        if (xhr.readyState === 4){
            // And if that status is okay...
            if(xhr.status === 200){
                // Creating data object to access json response
                var objectData = xhr.response;
                console.log(objectData);
                // Outputing object name
                outCity.innerHTML = objectData.name;
                // Outputing icon using icon code recieved from the object and concating it into open weather map icon sources
                outIcon.src = "http://openweathermap.org/img/wn/"+ objectData.weather[0].icon +".png";
                // Rounding tempurature from object and outputting it with degrees celcius 
                outTemp.innerHTML = Math.round(objectData.main.temp) + "&deg;C";
                // Capitalizing and outputting condition description from object
                outCond.innerHTML = objectData.weather[0].description.charAt(0).toUpperCase() + objectData.weather[0].description.slice(1) +".";
                // Outputting windspeed from object
                outWind.innerHTML = objectData.wind.speed;
            } else {
                // Displaying an error message if the status isn't okay
                outCity.innerHTML = "Error! API call was unsuccessful";
                console.log(xhr.status);
            }
        }
    }
    }

    // For loop to add on click event listener to any element with the class "cities"
   for (var i=0; i<cities.length; i++) {
    cities[i].addEventListener("click", function(){
        // Runs the showCity function with element id as cityName
        showCity(this.id);
       });
   }

    }

