const path = require('path');
const customerJourneyData = require('../model/customer.journey.model');



const getCustomerJourney = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '..','public','page' ,'html','customer-journey.html'))
}


const getCustomerJourneyData = (req,res) => {
    res.status(200).send(customerJourneyData)
}

const customerJourneyPageCtr = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public','app','page-controller' ,'customer.journey.page.controller.js'))
}
module.exports = {getCustomerJourney,getCustomerJourneyData,customerJourneyPageCtr}