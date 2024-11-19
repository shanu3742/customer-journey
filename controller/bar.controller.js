
const path = require('path');
const barData = require('../model/bar.model');
const getbar = (req,res) => {
    // Middleware to serve static files from the "public" directory
    res.status(200).sendFile(path.join(__dirname, '..','public','page','html' ,'bar.html'))
}

const getBarData = (req,res) => {
    res.status(200).send(barData)
}


const getbarPageCtr = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public','app','page-controller' ,'bar.page.controller.js'))
}
module.exports = {getbar,getbarPageCtr,getBarData}