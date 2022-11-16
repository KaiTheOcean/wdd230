const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=1815286&appid=75de79be96295d6922abaf7671958fbf";
const getWeather = async() => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    document.querySelector("#current-temp").textContent = 
    ((jsObject.main.temp - 273.15)* 1.80 + 32.00).toFixed(2);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
};
getWeather();