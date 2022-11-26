// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector("#windSpeed");

// URL
const url = "https://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&APPID=a3e347778ff618bdbb0ae6a89737f76c"


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    captionDesc.innerHTML = `<strong>Cloud Conditions:</strong> ${desc.toUpperCase()}`;
    mph.innerHTML = `<strong>Wind Speed:</strong> ${Math.round(weatherData.wind.speed)} mph`;
    temp.innerHTML = `<strong>Current Temp:</strong> ${weatherData.main.temp.toFixed(0)}° F`;
    windChillOutput.innerHTML = `<strong>Wind Chill:</strong> ${getWindChill(weatherData.wind.speed, weatherData.main.temp)}`;
  }
  
  // Calculate the Wind Chill Factor
  function getWindChill(mphInput, tempInput) {
    // Set value of windChill to "N/A"
    let windChill = "N/A";
  
    // Only calculate wind chill if wind is strong enough and temp is low enough
    if (mphInput > 3 && tempInput <= 50) {
      windChill = (
        35.74 + 0.6215 * tempInput -
        35.75 * mphInput ** 0.16 +
        0.4275 * tempInput * mphInput ** 0.16
      ).toFixed(2);
  
      windChill = `${windChill} °F`;
    }
    return windChill;
  }