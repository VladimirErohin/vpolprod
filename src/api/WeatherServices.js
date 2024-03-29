import axios from "axios";

 export default class WeatherService {
    static async getWeatherData(city, apiKey) {
        const response =
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        return response.data
    }
//
//     static async getWeatherForecast(coordLat: number, coordLon: number, apiKey: string) {
//         const response = await
//             axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordLat}&lon=${coordLon}&appid=${apiKey}`)
//         return response.data
//     }
}