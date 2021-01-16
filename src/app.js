
function formatDate(timestamp){
    let date = new Date(timestamp); 
    let hours = date.getHours(); 
    if (hours < 10){
        hours = `0${hour}`;}
    let minutes = date.getMinutes(); 
    if (minutes < 10){
        minutes = `0${minuets}`;}
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    let day = days[date.getDay()]; 
    return `${day}, ${hours}:${minutes}`;

}

function showTemperature(response){
    let city = (response.data.name); 
    let cityName = document.querySelector("#city");
    cityName.innerHTML = city;
    let icon = document.querySelector("#icon");
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon.setAttribute("alt", response.data.weather[0].description);
    let temperature = document.querySelector("#temperature"); 
    temperature.innerHTML = Math.round(response.data.main.temp);
    let windSpeed = document.querySelector("#wind"); 
    windSpeed.innerHTML = Math.round(response.data.wind.speed);
    let humidity = document.querySelector("#humidity"); 
    humidity.innerHTML = Math.round(response.data.main.humidity)
    let description = document.querySelector("#description"); 
    description.innerHTML = response.data.weather[0].description;
    let maxTemp = document.querySelector("#max");
    maxTemp.innerHTML = Math.round(response.data.main.temp_max);
    let minTemp = document.querySelector("#min");
    minTemp.innerHTML = Math.round(response.data.main.temp_min);  
    let dateElement = document.querySelector("#date"); 
    dateElement.innerHTML = formatDate(response.data.dt * 1000); 
}
 
function search(city){
let apiKey = "06c9d19d30f0be8b128071a6b5e0aeb3"; 
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);   
}

function submitForm(event){
   event.preventDefault(); 
   let cityInput = document.querySelector("#city-name"); 
   search(cityInput.value);
}

function getCurrentPosition(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiKey = "06c9d19d30f0be8b128071a6b5e0aeb3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitForm);

let button = document.querySelector("#current-location-button");
button.addEventListener("click", getCurrentPosition);



search("Paris");