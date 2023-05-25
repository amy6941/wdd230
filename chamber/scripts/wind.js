var temp = 40;
var speed = 5;
var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

var windChill = Math.round(windChill);

// if (temp <= 50 && speed >= 3) {
//     windchill = windChill(temp, speed);
//     windchill = `${windChill}&deg;F`;
// } else {
//     windChill = "N/A";
// }
  
document.getElementById("feelslike").innerHTML = windChill;