function showTemperature(response){
    console.log(response.data);
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
}


let apiKey = "06c9d19d30f0be8b128071a6b5e0aeb3"; 
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=${units}`;
console.log(apiUrl);

axios.get(apiUrl).then(showTemperature);
