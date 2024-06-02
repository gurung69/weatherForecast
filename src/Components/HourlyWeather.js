import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export default function HourlyWeather({hourlyData}){
    const iconUrl = process.env.REACT_APP_ICON_URL

    function getTime(unixTime){
        const d = new Date(unixTime * 1000);
        let AmOrPm = "AM"; 
        let hour = d.getHours();
        
        if (hour > 12){
          hour = hour - 12;
          AmOrPm = "PM";
        }
        if (hour == 0){
          hour = 12;
        }
        return `${hour} ${AmOrPm}`
    }

    // const data = null;
    if (hourlyData != null){
        const temperatures = hourlyData.list.map((data) => data.main.temp);
        var data = {
        labels: hourlyData.list.map((data) => getTime(data.dt)),
        datasets: [
            {
            label: 'Temperature',
            data: temperatures,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            yAxisID: '°C'
            }
        ]
        };

        var weatherCondtions = hourlyData.list.map((data, index)=>{
            return (
                <div className="hourly-condition" key={index}>
                    <img src={`${iconUrl}\\${data.weather[0].icon}@2x.png`}></img>
                    <p className="temp"><span className="bold">{Math.floor(data.main.temp)}</span> °C</p>
                    <p className="time">{getTime(data.dt)}</p>
                </div>
            )
        })
    }

    const options = {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time (Hourly)', // X-axis label
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Temperature (°C)', // Y-axis label
            },
          },
        },
      };

    return (
        <>
            <div className='chart-container'>
                <Line data={data} options={options}/>
            </div>
            <div className="hourly-condition-container">
                {weatherCondtions}
            </div>
            
        </>
        
    )

    
  }