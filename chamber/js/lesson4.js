let datePlacement = document.querySelector(".currentDate");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today = new Date();
let month = months[today.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayText = days[today.getDay()];
let dayNum = today.getDate();

let year = today.getFullYear();

console.log(today);
console.log(days);
console.log(dayNum);
console.log(dayText);

datePlacement.innerHTML = `${dayText}, ${dayNum} ${month}, ${year}`;

let button = document.querySelector(".btn");
let links = document.querySelector(".links");

function show() {
  links.classList.toggle("disappear");
}

button.addEventListener("click", show);

let date = new Date();
let yearFoot = date.getFullYear();

document.querySelector(".yearFoot").textContent = yearFoot;

let currentDate = document.lastModified;

document.querySelector(".lastModified").textContent = currentDate;

banner = document.getElementById('banner')
console.log(dayText)

if (dayText != "Monday" || dayText != "Tuesday"){
    banner.style.display = "none";
}
if (dayText == "Monday" || dayText == "Tuesday"){
    banner.style.display = "block"
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=1815286&appid=75de79be96295d6922abaf7671958fbf";
const getWeather = async() => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    document.querySelector("#current-temp").textContent = 
    ((jsObject.main.temp - 273.15)* 1.80 + 32.00).toFixed(2);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    // document.querySelector('figcaption').textContent = desc;
};
getWeather();