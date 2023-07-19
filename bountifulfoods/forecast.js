const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?id=5334223&units=imperial&appid=6aff75021ab94cb437039d85aee16f36";

fetch(forecasturl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    
        const weekdays = [
            "Sun",
            "Mon",
            "Tues",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        let today = 0;
    
        const forecast = jsObject.list.filter(x => x['dt_txt'].includes('18:00:00'));

        forecast.forEach(x => {
            let day= new Date([x].dt_txt);

            document.querySelector('#day' + (today + 1)).textContent = weekdays[day.getDay()];
            document.querySelector('#temp' + (today + 1)).textContent = (jsObject.main.temp).toFixed(2);

            const iconurl = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '@2x.png';
            const desc = jsObject.weather[0].description;
            document.getElementById('#description' + (today + 1)).textContent = iconurl;
            document.getElementById('iconurl' + (today + 1)).setAttribute('src', iconurl);
            document.getElementById('iconurl' + (today + 1)).setAttribute('alt', desc);

        });
        
    });
    

