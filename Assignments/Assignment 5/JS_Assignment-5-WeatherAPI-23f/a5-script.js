
    window.onload = function (){
    var outCity = document.getElementById("location");
    var outIcon = document.getElementById("icon");
    var outTemp = document.getElementById("temperature");
    var outCond = document.getElementById("conditions");
    var outShow = document.getElementById("output");
    var outWind = document.getElementById("wind");
    var cityName = document.getElementsByClassName(cityName);

    
    var APIkey = "2209f6bba4a141895a02712c26acd348";

    
    function showCity(cityName){
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + APIkey + "&units=metric";
    outShow.style.display = "block";
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
                outIcon.src = "http://openweathermap.org/img/wn/"+ objectData.weather[0].icon +".png";
                outTemp.innerHTML = Math.round(objectData.main.temp) + "&deg;C";
                outCond.innerHTML = objectData.weather[0].description.charAt(0).toUpperCase() + objectData.weather[0].description.slice(1) +".";
                outWind.innerHTML = objectData.wind.speed;
            } else {
                outCity.innerHTML = "Error! API call was unsuccessful";
                console.log(xhr.status);
            }
        }
    }
    }

   document.getElementById("Toronto").onclick = function(){
        showCity(this.id);
   }
   
    document.getElementById("Galway").onclick = function(){
            showCity(this.id);
    }
    }

