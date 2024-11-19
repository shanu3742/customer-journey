const express = require('express');
const { getScoreTrajectory, getScoreTrajectoryPageCtr, getScoreTrajectoryData } = require('../controller/score.trajectory');
const router = express.Router();
router.get('/coustomer/journey/scoreTrajectory',getScoreTrajectory);
router.get('/coustomer/journey/getScoreTrajectoryData',getScoreTrajectoryData)
router.get('/coustomer/journey/getScoreTrajectoryPageCtr',getScoreTrajectoryPageCtr)
module.exports= router;