
# step to add new page

## add  Html file into page folder

- **path** `public/app/page/html`
- **example** `coustomer-journey.html`

## create  the route to send the html file 
- **path** `/customer-journey/router/coustomer.journey.router.js`


```javascript
const express = require('express');
const router = express.Router();
router.get('/',onIndexRedirection)
router.get('/coustomer/journey/getJourney',getCustomerJourney)
module.exports= router;
```

## attached  html file to the server controller  **getCustomerJourney**

```javascript
const getCustomerJourney = (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '..','public','page' ,'html','coustomer-journey.html'))
}
```

# attach script file to html 

- **example** `<script type="module" src="./coustomerJourneyPageCtr"></script>`

- create controller for it in server controller file of that route.

```javascript
const coustomerJourneyPageCtr = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public','app','page-controller' ,'coustomer.journey.page.controller.js'))
}
```

## create controller for page controller and used it in server controller 

- **example** `coustomer.journey.page.controller.js`

- **path** `public/app/page-controller/coustomer.journey.page.controller.js`