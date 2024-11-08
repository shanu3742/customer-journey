const { onIndexRedirection,getCustomerJourney, appController } = require('../controller/coustomer.journey.controller')
const path = require('path');
const express = require('express');
const router = express.Router();


router.use(express.static(path.join(__dirname, '..', 'public')));
router.get('/',onIndexRedirection)
router.get('/coustomer/journey/getJourney',getCustomerJourney)
router.get('/coustomer/journey/app',appController)

    module.exports= router;

