const path = require('path');
const coustomerData = require('../model/coustomer.journey.model');

const onIndexRedirection = (req,res) => {
    console.log('wait to redirect')
    res.redirect('/coustomer/journey/getJourney')
}

const getCustomerJourney = (req,res) => {
    // Middleware to serve static files from the "public" directory
    res.status(200).sendFile(path.join(__dirname, '..','public','page' ,'html','coustomer-journey.html'))
}


const getCustomerJourneyData = (req,res) => {
    res.status(200).send(coustomerData)
}

const coustomerJourneyPageCtr = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public','app','page-controller' ,'coustomer.journey.page.controller.js'))
}
module.exports = {onIndexRedirection, getCustomerJourney,getCustomerJourneyData,coustomerJourneyPageCtr}