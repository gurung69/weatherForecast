import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const weather_url = process.env.REACT_APP_WEATHER_URL;
  const api_key = process.env.REACT_APP_API_KEY;

  const [coords, setCoords] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  function getCurrentWeather(){
    const [lat, lon] = coords;
    fetch(`${weather_url}?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    .then(response=>response.json())
    .then(data => {
      setCurrentData(data);
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
      getCurrentWeather();
    }
  }, [coords])

  return (
    <div className="App">
    </div>
  );
}

export default App;
