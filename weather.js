
const API_KEY = '8bfb392399ce87807cdea209c7ce8878'


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response =>response.json()).then(data=>{
        const weather = document.getElementById("weather");
        const city = document.getElementById("city");
        const otherTemp = document.getElementById("other_temp");
        

        weather.innerText = `${data.main.temp}º , ${data.weather[0].main}`;
        city.innerText =`${data.name} `;
        otherTemp.innerText = `${data.main.temp_max}º / <br> ${data.main.temp_min}º feels like ${data.main.feels_like}º`;
        
    });
}
function onGeoError(){
    alert("Can't find your location. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

