
const path = require('path');
const getbar = (req,res) => {
    // Middleware to serve static files from the "public" directory
    res.status(200).sendFile(path.join(__dirname, '..','public','page','html' ,'bar.html'))
}
module.exports = {getbar}