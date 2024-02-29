const apiKey = "293f148c81b5bec75b47839a4efae893";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector(".searchBtn");
const searchField = document.querySelector(".searchField");
const forecastImg = document.querySelector(".foreCastImg");
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json();
  if (data) {
    foreCastDisplay();
  }
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  searchField.value = "";
  console.log(data.weather[0].main);

  // foreCastImg(data.weather[0].main);

  if (data.weather[0].main === "Clear") {
    forecastImg.src = "images/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    forecastImg.src = "images/clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    forecastImg.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Humidity") {
    forecastImg.src = "images/humidity.png";
  } else if (data.weather[0].main === "Mist") {
    forecastImg.src = "images/mist.png";
  } else if (data.weather[0].main === "Rain") {
    forecastImg.src = "images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    forecastImg.src = "images/snow.png";
  } else if (data.weather[0].main === "Wind") {
    forecastImg.src = "images/wind.png";
  }
}

function foreCastDisplay() {
  document.querySelector(".placeholder-message").style.display = "none";
  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchField.value);
});

function foreCastImg(weather) {}
