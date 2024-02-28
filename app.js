const apiKey = "293f148c81b5bec75b47839a4efae893";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=losangeles";
const searchBtn = document.querySelector(".searchBtn");

async function checkWeather() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
checkWeather();
