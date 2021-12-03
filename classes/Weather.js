class Weather {
    constructor(city) {
        this.city = city
        this.key = "267150baac974e8778fd83a1510e781a"
    }
    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
    changeCity(city){
        this.city = city
    }
}