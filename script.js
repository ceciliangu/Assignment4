let weather; 
let weatherIcon = document.querySelector('#weather-icon')
let weatherTemp = document.querySelector('#weather-temp')
let weatherDesc = document.querySelector('#weather-desc')
let weatherCity = document.querySelector('#weather-city')

let getWeather = async () => {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=b9030a9cd1456b43f9ce5fda71c2a4fd')
    let data = await response.json()
    console.log(data)
    weather = await data;
    weatherCity.innerHTML = "City " + await weather.name;
    weatherTemp.innerHTML = "Temp: " + await weather.main.temp + "&deg;C";
    weatherDesc.innerHTML = "Description " + await weather.weather[0].description;
    weatherIcon.src = await `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
}
getWeather();

