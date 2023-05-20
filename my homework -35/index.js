fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temperature').textContent = Math.round(data.main.temp) + '°C';
        document.querySelector('.pressure').textContent = data.main.pressure;
        document.querySelector('.description').textContent = data.weather[0].description;
        document.querySelector('.humidity').textContent = data.main.humidity;
        document.querySelector('.wind-speed').textContent = data.wind.speed;
        document.querySelector('.wind-direction').textContent = data.wind.deg;
        document.querySelector('.weather-icon').src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    })
    .catch(function () {
        console.log('Error fetching weather data');
    });
