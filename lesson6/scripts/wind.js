var temp = 40;
var speed = 5;
var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));


var windChill; 

if (temp <= 50 && speed >= 3) {
     windChill = Math.round(35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

} else {
    windChill = "N/A";
}

var windChill = Math.round(windChill);

document.getElementById("feelslike").innerHTML = windChill;