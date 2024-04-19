//LAB 12 - SVG OUTDOOR SCENE

window.onload = function (){

var sun = document.getElementById("sun");
var sky = document.getElementById("sky");
var scene = document.getElementById("scene");
var btn = document.getElementById("set-sail");
var boat = document.getElementsByClassName("boat");

scene.onmouseover = function sunset (){
    sun.style.fill = "#EC6414";
    sky.style.fill = "#EC6414";
}

scene.onmouseout = function (){
    sun.style.fill = "yellow";
    sky.style.fill = "#ABDCF8";
}

btn.onclick = function () {

    for(i = 0; i < boat.length; i++) {
        boat[i].style.display = "block";
      }
}

}






