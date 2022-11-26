let t = parseFloat(document.querySelector(".temperature").innerHTML)
let s = parseFloat(document.querySelector(".wind-speed").innerHTML)
let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
if (t <= 50.0 && s > 3.0) {
    document.querySelector(".wind-chill").innerHTML = Math.ceil(chillFactor)
}
else {
    document.querySelector(".colored.chill").innerHTML = "N/A"
}

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&APPID=a3e347778ff618bdbb0ae6a89737f76c";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
 
    document.getElementById('currentTemp').textContent = jsObject.main.temp;
    document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    document.getElementById('windChill').textContent = windChill(jsObject.main.temp, jsObject.wind.speed);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
  });