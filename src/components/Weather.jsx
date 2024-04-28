import React, { useState } from 'react';
import '../styles/weather.css'

const Weather = () => {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [temperature, setTemperature] = useState(0);

  const checkTemp = async () => {
    let cityValue = document.getElementById('user_input').value;
    if (cityValue === "") {
      alert('Please enter a city name before searching');
    } else {
      try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`);
        let data = await response.json();
        setCityName(data.name);
        setCountryName(data.sys.country);
        setTemperature(data.main.temp);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
      }
    }
  };

  return (
    <div>
      <div className="section1">
        <section className="weatherapp">
          <div className="location">
            <h3 id="city" style={{ fontSize: '50px' }}> CityName{cityName}</h3>
            <h5 id="country" style={{ fontSize: '36px' }}>Country{countryName}</h5>
          </div>

          <div className="information">
            <div className="temp_information">
              <h2><span id="temperature">{temperature}</span><sup>o</sup>C</h2>
            </div>

            <div className="image">
              <img src="https://oxenticstemplates.biz/templatemonster/weather/images/banne-img-right.png" alt="" />
            </div>
          </div>

          <div className="search">
            <input id="user_input" type="text" placeholder="Enter city name" />
            <button onClick={checkTemp}>Search</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Weather;
