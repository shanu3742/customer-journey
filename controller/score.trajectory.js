const path = require('path');
const getScoreTrajectory = (req,res) => {
    // Middleware to serve static files from the "public" directory
    res.status(200).sendFile(path.join(__dirname, '..','public','page','html' ,'score-trajectory-graph.html'))
}


const getScoreTrajectoryPageCtr = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public','app','page-controller' ,'score.trajectory.page.controller.js'))
}

module.exports = {getScoreTrajectory,getScoreTrajectoryPageCtr}