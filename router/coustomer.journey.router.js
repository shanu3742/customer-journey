const { onIndexRedirection,getCustomerJourney, coustomerJourneyPageCtr, getCustomerJourneyData } = require('../controller/coustomer.journey.controller')
const express = require('express');
const router = express.Router();
router.get('/',onIndexRedirection)
router.get('/coustomer/journey/getJourney',getCustomerJourney)
router.get('/coustomer/journey/getData',getCustomerJourneyData)
router.get('/coustomer/journey/coustomerJourneyPageCtr',coustomerJourneyPageCtr)
module.exports= router;

