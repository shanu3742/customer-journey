const express = require('express');
const { getScoreTrajectory, getScoreTrajectoryPageCtr, getScoreTrajectoryData } = require('../controller/score.trajectory');
const router = express.Router();
router.get('/app/graph/v1/scoreTrajectory',getScoreTrajectory);
router.get('/app/graph/v1/getScoreTrajectoryData',getScoreTrajectoryData)
router.get('/app/graph/v1/getScoreTrajectoryPageCtr',getScoreTrajectoryPageCtr)
module.exports= router;