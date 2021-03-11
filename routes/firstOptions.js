const router = require('express').Router();
const opt1 = require('../store').opt1;
const opt2 = require('../store').opt2;

router.route('/').post((req, res) => {
    console.log(req.body);
    res.send(opt2);
});

module.exports = router;
