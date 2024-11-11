const express = require('express');
const path = require('path');
const APP_CONFIG = require('./config/app/app.config');
const  customerJourneyRoutes  = require('./router/coustomer.journey.router');
const  barRoutes  = require('./router/bar.router');

const app = express();


app.use(express.static('./public'));
console.log(path.join(__dirname,'public'))
// Use the customer journey routes
app.use('/', customerJourneyRoutes);
app.use('/', barRoutes);

app.listen(APP_CONFIG.PORT,() => {
    console.log('connected server')
})