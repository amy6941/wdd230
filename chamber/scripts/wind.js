
const temp = document.getElementById("current-temp");
const speed = document.getElementById("speed");
const windC = document.getElementById("chill");
let windChill = "";
 

if (temp <= 50 && speed >= 3) {
    windChill = Math.round(35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    windC.textContent = windChill;

} else {
    windC.textContent = "N/A";
}


