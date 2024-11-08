const express = require('express');
const path = require('path');
const APP_CONFIG = require('./config/app/app.config');
const  customerJourneyRoutes  = require('./router/coustomer.journey.router');

const app = express();



// Use the customer journey routes
app.use('/', customerJourneyRoutes);

app.listen(APP_CONFIG.PORT,() => {
    console.log('connected server')
})