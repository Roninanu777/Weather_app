let appId = '2870e042874453c6dfd4719bc74e5778';
let units = 'metric';
let searchMethod = 'q';

function searchWeather(searchCity){
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchCity}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    });
}

function init(resultFromServer){
    switch (resultFromServer.weather[0].main) {
        case 'Clear'       :document.body.style.backgroundImage = 'url("img/clear.jpg")';
                            break;
        
        case 'Clouds'      :document.body.style.backgroundImage = 'url("img/cloudy.jpg")';
                            break;

        case 'Rain'        :document.body.style.backgroundImage = 'url("img/rainy.jpg")';
                            break;

        case 'Drizzle'     :document.body.style.backgroundImage = 'url("img/drizzle.jpg")';
                            break;

        case 'Haze'        :document.body.style.backgroundImage = 'url("img/haze.jpg")';
                            break;

        case 'Dust'        :document.body.style.backgroundImage = 'url("img/dust.jpg")';
                            break;

        case 'Mist'        :document.body.style.backgroundImage = 'url("img/mist.jpg")';
                            break;

        case 'Thunderstorm':document.body.style.backgroundImage = 'url("img/thunderstorm")';
                            break;

        case 'Snow'        :document.body.style.backgroundImage = 'url("img/snow.jpg")';
                            break;

        default            :document.body.style.backgroundImage = 'url("img/default.jpg")';
                            break;
    }
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('weatherIconImg');

    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    let weatherDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerHTML = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

    let temperature = resultFromServer.main.temp;
    temperatureElement.innerHTML = 'Temperature ' +Math.floor(temperature)+'&#176'+'C';

    let humidity = resultFromServer.main.humidity;
    humidityElement.innerHTML = 'Humidity '+humidity+'%';

    let windSpeed = resultFromServer.wind.speed;
    windSpeedElement.innerHTML = 'Wind Speed '+windSpeed+'m/s';
    cityHeader.innerHTML = resultFromServer.name;

    setPositionForWeatherInfo();

}

function setPositionForWeatherInfo(){
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerHeight = wetherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;

    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3}px)`;
    weatherContainer.style.visibility = 'visible';
}

document.getElementById('searchBtn').addEventListener('click',() =>{
    let searchCity = document.getElementById('searchInput').value;
    if(searchCity)
        searchWeather(searchCity);
});