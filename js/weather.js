const API_KEY = "d3b5a2f51760c0dbf644ac7c12d67d80";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-Child");
      const city = document.querySelector("#weather span:last-Child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function onGoeError() {
  alert("위치를 찾을 수 없습니다.");
  weather.innerText = "-";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGoeError);
