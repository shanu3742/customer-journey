const express = require('express');
const path = require('path')
const app = express();



app.get('/coustomer/journey/getJourney',(req,res) => {
        res.status(200).sendFile(path.join(__dirname,  'index.html'))
})


app.listen(4000,() => {
    console.log('connected server')
})