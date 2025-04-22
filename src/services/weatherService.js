const express = require('express');
const router = express();
const axios = require('axios');
const API_KEY = process.env.OPENWEATHER_API_KEY;

const getWeather = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

  const res = await axios.get(url);
  const data = res.data;

  return {
    city: data.location.name,
    temperature: data.current.temp_c,
    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph
  };
};

module.exports = getWeather;


