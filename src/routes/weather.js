const express = require('express');
const router = express();
/* ------------------------------- */
const getWeather = require('../services/weatherService');
const { getCache, setCache } = require('../utils/cache');

router.get('/:city', async (req, res) => {
  const city = req.params.city.toLowerCase();


  const cached = await getCache(city);
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  try {
    const weatherData = await getWeather(city);
    setCache(city, JSON.stringify(weatherData)); // save in cache
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ------------------------------- */
module.exports = router