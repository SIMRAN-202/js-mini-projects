const api_key = "fd4dcf870b3371e3eb68b81d0cf1f05b"

const searn_btn = document.getElementById('searchBtn')
const city_input = document.getElementById('cityInput')

const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const errorMsg = document.getElementById('errorMsg');


function displayWeather(data){
    errorMsg.classList.add('hidden')
    weatherInfo.classList.remove('hidden')

    cityName.textContent = data.name;
    description.textContent = data.weather[0].description;
    temperature.textContent = Math.round(data.main.temp);
    humidity.textContent = data.main.humidity;
    wind.textContent = data.wind.speed;

     const iconCode = data.weather[0].icon;
     weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function showError(message){
    weatherInfo.classList.add('hidden')
    errorMsg.textContent = message;
    errorMsg.classList.remove('hidden')
}

function fetchWeather(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(apiURL)
    .then(res => {
        if(!res.ok) {
            throw new Error('City not found')
        }
        return res.json()
    })
    .then(data => {
        displayWeather(data)
    })
    .catch(err =>{
        showError(err.message)
    })

}

searn_btn.addEventListener('click', ()=>{
    const city = city_input.value.trim()
    if(city !== ''){
        fetchWeather(city)
    }
})


window.addEventListener('load', ()=>{
    fetchWeather('Delhi')
})
