const firstOptions = require('./routes/firstOptions'); // route responsible to handle welcome options
const Welcome = require('./routes/welcome'); // route with initial greeting and set of five option to choose from
const errorHandler = require('errorhandler');
const session = require('express-session');
// const User = require('./routes/User');
const mongoose = require('mongoose');
const express = require('express'); // essential dependency to handle backend HTTP requests
const cors = require('cors');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // it is used instead of bodyParser app.use(bodyParser.json())

app.use('/', Welcome); // base route for welcome text and question for further branching
app.use('/firstOptions', firstOptions); // route triggered to handle first set of options
// app.use('/user', User); // Route with authentication

// Authentication
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
//Configure Mongoose
// mongoose.connect('mongodb://localhost/authentication', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
