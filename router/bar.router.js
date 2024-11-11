
const path = require('path');
const express = require('express');
const { getbar } = require('../controller/bar.controller');
const router = express.Router();
router.get('/coustomer/journey/bar',getbar);
module.exports= router;