let weatherSearch = document.querySelector(".weather-search-input");
let weatherBtn = document.querySelector(".weather-btn");
let weatherTitle = document.querySelector(".weather-title");
let weatherDescription = document.querySelector(".weather-description");
let weatherTemperature = document.querySelector(".weather-temperature");
let weatherContainer = document.querySelector(".weather-details");
let loader = document.querySelector(".loader");

let weatherDom = function (response) {
  weatherContainer.innerHTML = "";
  let weatherTitleH2 = document.createElement("h2");
  weatherTitleH2.className = "weather-title";
  weatherTitleH2.textContent = `Region: ${response.name}`;
  let weatherDescriptionP = document.createElement("p");
  weatherDescriptionP.className = "weather-description";
  weatherDescriptionP.textContent = `Description: ${response.weather[0].description}`;
  let weatherTemperatureP = document.createElement("p");
  weatherTemperatureP.className = "weather-temperature";
  weatherTemperatureP.innerHTML = `Temperature: ${convertToCelsius(
    response.main.temp
  )}&deg;C`;
  weatherContainer.append(weatherTitleH2);
  weatherContainer.append(weatherDescriptionP);
  weatherContainer.append(weatherTemperatureP);
  weatherContainer.style.marginTop = "20px";
};

fetchApi(
  `https://api.openweathermap.org/data/2.5/weather?q=palestine&appid=07975b6284106c9be0051b263f218d66`,
  weatherDom
);

weatherBtn.addEventListener("click", () => {
  fetchApi(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch.value}&appid=07975b6284106c9be0051b263f218d66`,
    weatherDom
  );
  weatherSearch.value = "";
});

window.onload = () => {
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
  }, 5000);
};
