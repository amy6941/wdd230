
var temp = document.getElementById("#current-temp");
var speed = document.getElementById("#speed");
var windChill = "";


var windChill; 

if (temp <= 50 && speed >= 3) {
     windChill = Math.round(35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

} else {
    windChill.textContent = ("N/A");
}

var windChill = Math.round(windChill)  

document.querySelector("#chill").innerHTML = windChill;
