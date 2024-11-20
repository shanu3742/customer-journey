const {getCustomerJourney, getCustomerJourneyData, customerJourneyPageCtr } = require('../controller/customer.journey.controller')
const express = require('express');
const { onIndexRedirection } = require('../controller/global.controller');
const router = express.Router();
router.get('/',onIndexRedirection)
router.get('/app/graph/v1/getJourney',getCustomerJourney)
router.get('/app/graph/v1/getData',getCustomerJourneyData)
router.get('/app/graph/v1/customerJourneyPageCtr',customerJourneyPageCtr)
module.exports= router;

