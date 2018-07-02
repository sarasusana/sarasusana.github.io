var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=65619,us&appid=a2b1ceb8e5a611fcc17d654a03d0e491&units=imperial', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('weatherDescription').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('high').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('low').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('w-icon').src = icon_path;
    
    
}