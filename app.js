// ls object
const ls = new LS()
//init city
const initCity = ls.getCityData()
//weather object
const weather = new Weather(initCity)
// UI object
const ui = new UI()



//

const form = document.querySelector("#change-city")
form.addEventListener("submit", changeCityWeather)

// change city weather

function changeCityWeather(event){
    const city = document.querySelector("#city-name").value
    weather.changeCity(city)
    ls.setCityData(city)
    getWeather()
    document.querySelector("#city-name").value =""
    event.preventDefault()
}

// get city weather
function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}
getWeather()