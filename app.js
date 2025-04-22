const express = require('express');
const app = express();
const env = require('dotenv').config();
const weather  = require('./src/routes/weather')
/* ------------------------------- */
app.use(express.json());
app.use('/api/weather', weather);







/* ------------------------------- */
app.listen(3500,() => console.log(`link in 3500`))