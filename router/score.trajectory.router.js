const express = require('express');
const { getScoreTrajectory, getScoreTrajectoryPageCtr } = require('../controller/score.trajectory');
const router = express.Router();
router.get('/coustomer/journey/scoreTrajectory',getScoreTrajectory);
router.get('/coustomer/journey/getScoreTrajectoryPageCtr',getScoreTrajectoryPageCtr)
module.exports= router;