function updateData(input) {
  let newCityName = input.data.name;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = newCityName;
  console.log(input.data);
  let highCelsius = Math.round(input.data.main.temp_max);
  let lowCelsius = Math.round(input.data.main.temp_min);
  let currentCelsuis = Math.round(input.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${currentCelsuis}°C`;
  let highTemp = document.querySelectorAll(".high-temp");
  highTemp.forEach((Element) => {
    Element.innerHTML = `${highCelsius}°C / `;
  });
  let lowTemp = document.querySelectorAll(".low-temp");
  lowTemp.forEach((Element) => {
    Element.innerHTML = `${lowCelsius}°C`;
  });
}

function updateDataLocation(input) {
  let newCityName = input.data.name;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = newCityName;
  console.log(input.data);
  let highCelsius = Math.round(input.data.main.temp_max);
  let lowCelsius = Math.round(input.data.main.temp_min);
  let currentCelsuis = Math.round(input.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${currentCelsuis}°C`;
  let highTemp = document.querySelectorAll(".high-temp");
  highTemp.forEach((Element) => {
    Element.innerHTML = `${highCelsius}°C / `;
  });
  let lowTemp = document.querySelectorAll(".low-temp");
  lowTemp.forEach((Element) => {
    Element.innerHTML = `${lowCelsius}°C`;
  });
}

function searchCityWeather(response) {
  response.preventDefault();
  let searchCity = document.querySelector("#city-input");
  searchCity = searchCity.value;
  let unit = "metric";
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(updateData);
}

function searchLocationWeather(position) {
  let long = position.coords.longitude;
  let lat = position.coords.latitude;
  let unit = "metric";
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(updateDataLocation);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(searchLocationWeather);
}
function createDay(date) {
  let nameDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = nameDay[date.getDay()];
  let hours = ("0" + date.getHours()).slice(-2);
  let mins = ("0" + date.getMinutes()).slice(-2);
  let time = `${hours}:${mins}`;
  return (fullDate = `${day} ${time}`);
}

function createDate(date) {
  let nameMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = nameMonth[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let fullDate = `${day}-${month}-${year}`;
  return fullDate;
}

let now = new Date();
let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = createDay(now);
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = createDate(now);

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", searchCityWeather);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getLocation);
