import React from "react";

export default function CurrentWeather({data}){
    const iconUrl = process.env.REACT_APP_ICON_URL;
    return(
        <div className="current-info-container">
            <div className="current-info-left">
                <h1 className="location">{data.name}</h1>
                <img src={`${iconUrl}\\${data.weather[0].icon}@2x.png`}></img>
                <h1 className="current-weather-description">{data.weather[0].description}</h1>
            </div>
            <div className="current-info-right">
                <h1 className="temp">{Math.floor(data.main.temp)} °C</h1>
                <p>Feels Like: {Math.floor(data.main.feels_like)} °C</p>
                <p>Humidity: {data.main.humidity}%</p>
                <p>Wind Speed: {data.wind.speed} km/h</p>
            </div>
        </div>
    )
}