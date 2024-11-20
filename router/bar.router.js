
const path = require('path');
const express = require('express');
const { getbar, getbarPageCtr, getBarData } = require('../controller/bar.controller');
const router = express.Router();
router.get('/app/graph/v1/bar',getbar);
router.get('/app/graph/v1/getBarData',getBarData)
router.get('/app/graph/v1/getbarPageCtr',getbarPageCtr)
module.exports= router;