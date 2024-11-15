
const path = require('path');
const getbar = (req,res) => {
    // Middleware to serve static files from the "public" directory
    res.status(200).sendFile(path.join(__dirname, '..','public','page','html' ,'bar.html'))
}
const getbarPageCtr = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public','app','page-controller' ,'bar.page.controller.js'))
}
module.exports = {getbar,getbarPageCtr}