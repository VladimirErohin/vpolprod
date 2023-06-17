import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import weatherService from "../../api/WeatherServices";
import {getWeather} from "../../redux/slices/weather/slice";

const Weather = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector((store) => store.weather.weatherData);

    const apiKey = '528488e7ee8f7a518a483627bfa61928';
    const city = 'Minsk';

    const temperature = weatherData === null ? 'Погода' : (Math.ceil(weatherData.main.temp - 273));

    const iconForWeather = weatherData?.weather[0]['icon'];

    useEffect(
        () => {
            fetchDataWeather(city, apiKey)
        },
        []);

    async function fetchDataWeather(cityName, apiKeyData) {
        const weather = await weatherService.getWeatherData(cityName, apiKeyData);
        dispatch(getWeather(weather))
    }

    return (
        <div>
            <i title="Погода в Минске">
                {temperature > 0
                    ? <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`https://openweathermap.org/img/w/${iconForWeather}.png`} alt="icon weather"/>
                        <div>+{temperature}</div>
                    </div>
                    : <div style={{display:'flex', alignItems:"center"}}><img
                        src={`https://openweathermap.org/img/w/${iconForWeather}.png`} alt="icon weather"/>
                        <div>-{temperature}</div>
                    </div>}
            </i>
        </div>
    );
};

export default Weather;