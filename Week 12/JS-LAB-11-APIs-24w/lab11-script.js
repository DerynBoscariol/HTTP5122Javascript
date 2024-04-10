window.onload = function(){
var outCity = document.getElementById("location");
var outTemp = document.getElementById("temperature");
var outCond = document.getElementById("conditions");

var APIkey = "2209f6bba4a141895a02712c26acd348";

var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + APIkey + "&units=metric";

var xhr = new XMLHttpRequest();

xhr.open('GET', url, true);
xhr.responseType = "json";
xhr.send(null);

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4){
        if(xhr.status === 200){
            var objectData = xhr.response;
            console.log(objectData);
            outCity.innerHTML = objectData.name;
            outTemp.innerHTML = Math.round(objectData.main.temp) + "&deg;C";
            outCond.innerHTML = objectData.weather[0].description.charAt(0).toUpperCase() + objectData.weather[0].description.slice(1) +".";
        } else {
            outCity.innerHTML = "Error! API call was unsuccessful";
            console.log(xhr.status);
        }
    }
}

};