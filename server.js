const firstOptions = require('./routes/firstOptions');
const Welcome = require('./routes/welcome');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // it is used instead of bodyParser app.use(bodyParser.json())

app.use('/', Welcome); // base route for welcome text and question for further branching
app.use('/firstOptions', firstOptions); // route triggered to handle first set of options

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
