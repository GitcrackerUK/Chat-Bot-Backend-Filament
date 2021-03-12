const firstOptions = require('./routes/firstOptions'); // route responsible to handle welcome options
const Welcome = require('./routes/welcome'); // route with initial greeting and set of five option to choose from
const errorHandler = require('errorhandler');
const session = require('express-session');
const mongoose = require('mongoose');
const express = require('express'); // essential dependency to handle backend HTTP requests
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // it is used instead of bodyParser app.use(bodyParser.json())

app.use('/', Welcome); // base route for welcome text and question for further branching
app.use('/firstOptions', firstOptions); // route triggered to handle first set of options

// Authentication

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
