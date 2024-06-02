import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import CurrentWeather from './Components/CurrentWeather';
import HourlyWeather from './Components/HourlyWeather';


function App() {
  const weather_url = process.env.REACT_APP_CURRENT_WEATHER_URL;
  const api_key = process.env.REACT_APP_API_KEY;
  const weather_forecast_url = process.env.REACT_APP_WEATHER_FORECAST_URL;

  const [coords, setCoords] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [city, setCity] = useState("");
  const [hourlyData, setHourlyData] = useState(null);

  function getWeatherByCoords(){
    const [lat, lon] = coords;

    // get current weather data
    fetch(`${weather_url}?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    .then(response=>response.json())
    .then(data => {
      setCurrentData(data);
      console.log(data);
    })

    // get hourly forecast
    fetch(`${weather_forecast_url}?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    .then(response=>response.json())
    .then(data=>{
      setHourlyData(data);
      console.log(data);
    })
  }

  function getWeatherByCity(){
    // get current weather data
    fetch(`${weather_url}?q=${city}&appid=${api_key}&units=metric`)
    .then(response=>response.json())
    .then(data => {
      setCurrentData(data);
      console.log(data);
    })

    // get hourly forecast
    fetch(`${weather_forecast_url}?q=${city}&appid=${api_key}&units=metric`)
    .then(response=>response.json())
    .then(data=>{
      setHourlyData(data);
      console.log(data);
    })
  }

  function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            setCoords([position.coords.latitude, position.coords.longitude]);
        })
    }
  }

  useEffect(()=>{
      getLocation();
  }, [])

  useEffect(()=>{
    if (coords != null){
      getWeatherByCoords();
    }
  }, [coords])

  return (
    <div className="App">
      <SearchBar city={city} updateCity={setCity} getWeather={getWeatherByCity}/>
      {currentData == null || hourlyData == null?
      <p>Loading...</p>:
      <>
        <CurrentWeather data={currentData}/>
        <HourlyWeather hourlyData={hourlyData}/>
      </>}
      
    </div>
  );
}

export default App;
