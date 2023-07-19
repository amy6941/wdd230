

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const tempNow = document.querySelector('#current');
const windSpeed = document.querySelector('#speed');
const feel = document.querySelector('#feelslike');
const humidity = document.getElementById('#humidity');

// select HTML elements in the document



const url = 'https://api.openweathermap.org/data/2.5/weather?q=Franklin,TN,USA&units=imperial&appid=6aff75021ab94cb437039d85aee16f36';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
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
  tempNow.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;
  feel.innerHTML = `<strong>${weatherData.main.feels_like.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}


  