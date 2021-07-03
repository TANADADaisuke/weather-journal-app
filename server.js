// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
}


// GET Route
projectData['x'] = 'y';


const sendData = (req, res) => {
    res.send(projectData);
}

app.get('/all', sendData);


// POST Route
let weatherData = [];

const addWeather = (req, res) => {
    const newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        response: req.body.response
    }
    weatherData.push(newEntry);
    res.send(weatherData);
    console.log(weatherData);
}

app.post('/addWeather', addWeather);
