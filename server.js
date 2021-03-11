const bodyParser = require('body-parser'); // body parser is not needed because express has it built in
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // it is used instead of bodyParser app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
