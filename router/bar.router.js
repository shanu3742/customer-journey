
const path = require('path');
const express = require('express');
const { getbar, getbarPageCtr, getBarData } = require('../controller/bar.controller');
const router = express.Router();
router.get('/coustomer/journey/bar',getbar);
router.get('/coustomer/journey/getBarData',getBarData)
router.get('/coustomer/journey/getbarPageCtr',getbarPageCtr)
module.exports= router;