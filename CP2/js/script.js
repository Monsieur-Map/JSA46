// //function update data on UT
function updateUI(name, img, temp, humid, coordinates) {
  //Lấy phần tử từ html
  const name_element = document.getElementById("cityName");
  const img_element = document.getElementById("weatherIcon");
  const temp_element = document.getElementById("temperature");
  const humid_element = document.getElementById("humidity");
  const coordinates_element = document.getElementById("coordinates");

  //update data
  name_element.textContent = name;
  img_element.src = `https://openweathermap.org/img/wn/${img}.png`;
  temp_element.textContent = temp;
  humid_element.textContent = humid;
  coordinates_element.textContent = coordinates;
}

const apiKey = "323a8cfdbacf011f6c7e17e6f02da926";

// Kiểm tra thành phố
function getWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url + city)
    .then(function (json) {
      return json.json();
    })
    .then(function (data) {
      updateUI(
        data.name,
        data.weather[0].icon,
        data.main.temp,
        data.main.humidity,
        null
      );
    });
}

//Lấy vĩ tuyến, kinh tuyến
function getWeatherByLocation(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
console.log(latitude,longitude);

  fetch(url)
    .then((json) => json.json())
    .then(function (data) {
      displayWeather(data);
    })
    .catch((error) => console.log(error));
}

// Event listener for location button (using geolocation)
document.querySelector("#locationBtn").click(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        getWeatherByLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      function () {
        alert("Unable to retrieve location.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

document
  .getElementById("searchBtn")
  .addEventListener("click", function (event) {
    //Không cho website load theo mặc định
    event.preventDefault();
    //Lấy dữ liệu từ input
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
      alert("Vui lòng nhập");
    } else {
      getWeatherByCity(city);
    }
  });
