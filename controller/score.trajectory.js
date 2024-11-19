const path = require('path');
const scoreTrajectoryData = require('../model/score.trajectory.model');
const getScoreTrajectory = (req,res) => {
    // Middleware to serve static files from the "public" directory
    res.status(200).sendFile(path.join(__dirname, '..','public','page','html' ,'score-trajectory-graph.html'))
}

const getScoreTrajectoryData = (req,res) => {
    res.status(200).send(scoreTrajectoryData)
}


const getScoreTrajectoryPageCtr = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public','app','page-controller' ,'score.trajectory.page.controller.js'))
}

module.exports = {getScoreTrajectory,getScoreTrajectoryPageCtr,getScoreTrajectoryData}