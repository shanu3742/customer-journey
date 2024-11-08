const path = require('path');

const onIndexRedirection = (req,res) => {
    console.log('wait to redirect')
    res.redirect('/coustomer/journey/getJourney')
}

const getCustomerJourney = (req,res) => {
    // Middleware to serve static files from the "public" directory
    res.status(200).sendFile(path.join(__dirname, '..', 'index.html'))
}

const appController = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'app' ,'app.js'))
}
module.exports = {onIndexRedirection, getCustomerJourney,appController}