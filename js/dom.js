let weatherSearch = document.querySelector(".weather-search-input");
let weatherBtn = document.querySelector(".weather-btn");
let weatherTitle = document.querySelector(".weather-title");
let weatherDescription = document.querySelector(".weather-description");
let weatherTemperature = document.querySelector(".weather-temperature");
let weatherContainer = document.querySelector(".weather-details");

let weatherDom = function (response) {
  weatherContainer.innerHTML = "";
  let weatherTitleH2 = document.createElement("h2");
  weatherTitleH2.className = "weather-title";
  weatherTitleH2.textContent = response.name;
  let weatherDescriptionP = document.createElement("p");
  weatherDescriptionP.className = "weather-description";
  weatherDescriptionP.textContent = response.weather[0].description;
  let weatherTemperatureP = document.createElement("p");
  weatherTemperatureP.className = "weather-temperature";
  weatherTemperatureP.textContent = `${convertToCelsius(response.main.temp)}`;
  weatherContainer.append(weatherTitleH2);
  weatherContainer.append(weatherDescriptionP);
  weatherContainer.append(weatherTemperatureP);
  weatherContainer.style.marginTop = "20px";
};

weatherBtn.addEventListener("click", () => {
  fetchApi(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch.value}&appid=07975b6284106c9be0051b263f218d66`,
    weatherDom
  );
});
