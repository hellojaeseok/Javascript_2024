const API_KEY = "e84ace74bf5ab35a32f41c0e22f24814"

function GeoSuccess(position){
    const lat = position.coords.latitude
    const long = position.coords.longitude
    //console.dir(`You live in ${lat} ${long}`)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        
        city.innerText = `Location: ${data.name}`
        weather.innerText = `Temperature: ${Math.round(data.main.temp)} °C | Apparent Temperature: ${Math.round(data.main.feels_like)}°C | ${data.weather[0].main}`
        //Humidity: ${data.main.humidity} g/Kg
        //console.log(data.name, data.weather[0].main)
    })


}

function GeoFailure(){
    alert("Can't find location. No weather information available")
}

navigator.geolocation.getCurrentPosition(GeoSuccess,GeoFailure)
