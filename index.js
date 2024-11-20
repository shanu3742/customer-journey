const express = require('express');
const path = require('path');
const APP_CONFIG = require('./config/app/app.config');
const  customerJourneyRoutes  = require('./router/customer.journey.router');
const  barRoutes  = require('./router/bar.router');
const  scoreTrajectoryRoutes  = require('./router/score.trajectory.router');
const { onIndexRedirection } = require('./controller/global.controller');

const app = express();


app.use(express.static('./public'));
//get the all routes
app.use('/', customerJourneyRoutes);
app.use('/', barRoutes);
app.use('/', scoreTrajectoryRoutes);

//Universal route 
app.get('**',onIndexRedirection)

app.listen(APP_CONFIG.PORT,() => {
    console.log('connected server')
})