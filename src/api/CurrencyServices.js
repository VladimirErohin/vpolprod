import axios from "axios";

 export default class CurrencyService {
    static async getCurrencyData() {
        const response =
            await axios.get(`https://api.nbrb.by/exrates/rates?periodicity=0`);
        // const currencyData = await
        //     .then(res => res.json())
        //     .then(data => dispatch(getCurrency(data)))
        return response.data
    }
//
//     static async getWeatherForecast(coordLat: number, coordLon: number, apiKey: string) {
//         const response = await
//             axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordLat}&lon=${coordLon}&appid=${apiKey}`)
//         return response.data
//     }
}