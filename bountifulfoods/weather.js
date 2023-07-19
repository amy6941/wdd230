// const lat = 33.15743;
// const lon = -117.34857;
const url = `https://api.openweathermap.org/data/2.5/weather?id=5334223&units=imperial&appid=6aff75021ab94cb437039d85aee16f36`;


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed');
const humidity = document.querySelector('#humidity');


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log()
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
    
apiFetch();


function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;


    humidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

const temp = document.getElementById("current-temp");
const speed = document.getElementById("speed");
const windC = document.getElementById("chill");
let windChill = "";
if (temp <= 50 && speed >= 3) {
    windChill = Math.round(35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    windC.textContent = windChill;

} else {
    windC.textContent = "N/A" ;
}












// loadForecast()

// async function loadForecast() {
//     const response = await fetch(urlForecast);
//     const weekdays = [
//         "Sun",
//         "Mon",
//         "Tues",
//         "Wed",
//         "Thu",
//         "Fri",
//         "Sat"
//     ];
    
//     if (response.ok) {
//         const forecastData = await response.json();
//         let weekDay = weekdays[forecastData.getDay];
//         let dayCount = 1;
//         let currentDay = "day" + String(dayCount);
//         for (let i=0; i < currentDay; i++) {

//             dataPoint = forecastData.list[i]

//             let forecastDay = new Date (dataPoint[i].dt * 1000).toString().slice(0,24);
//             let forecastTemp = dataPoint[i].main.temp;
//             let forecastIcon = dataPoint[i].weather[0].icon;
//             let forecastDesc = dataPoint.weather[0].description;

//             let urlIcon = `https://openweathermap.org/img/wn/${forecastIcon}@2x.png`;

//             document.querySelector(currentDay + "name").innerText = weekDay;
//             document.querySelector(currentDay + "temp").innerText = forecastTemp;
//             document.querySelector(currentDay + "description").innerText = forecastDesc;
//             document.querySelector(currentDay + "icon").innerText = urlIcon;
//             document.querySelector(currentDay + "icon").alt = forecastDesc;
//             dayCount++;
//         }    
//     }
// }
// console.log(loadForecast)

// let fiveDayForecast;

// fetch('https://api.weather.com/forecast/daily?days=5&units=metric&key=[YOUR API KEY HERE]')
//     .then(response => response.json())
//     .then(data => {
//         fiveDayForecast = data.forecast.forecastDay;
//     });