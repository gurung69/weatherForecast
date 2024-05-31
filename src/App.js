import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [coords, setCoords] = useState(null);

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

  return (
    <div className="App">
    </div>
  );
}

export default App;
