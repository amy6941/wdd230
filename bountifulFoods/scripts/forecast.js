const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?id=5334223&units=imperial&appid=6aff75021ab94cb437039d85aee16f36";

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

const weekdays = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
let today = 0;
let forecast = jsonObject.list.filter(i => i['dt_txt'].includes('18:00:00'));
console.log(forecast);

        
forecast.forEach(jsonObject => {
    let day = new Date(jsonObject.dt_txt)
    let imgsrc = 'https://openweathermap.org/img/w' + jsonObject.weather[0].icon +'.png';
    let desc = jsonObject.weather[0].description;
    let current = 'weekday' + (today + 1);

    document.getElementById(current).textContent = weekday[day.getDay()];
    document.getElementById('temp' + (today + 1)).textContent = jsonObject.main.temp;
    document.getElementById('icon' + (today + 1)).setAttribute('alt', desc);
    
    today++;

})