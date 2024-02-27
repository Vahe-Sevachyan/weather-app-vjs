const apiKey = "293f148c81b5bec75b47839a4efae893";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris";
async function checkWeather() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
}
checkWeather();
