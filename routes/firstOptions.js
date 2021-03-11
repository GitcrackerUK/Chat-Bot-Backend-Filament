const router = require('express').Router();
const opt1 = require('../store').opt1;
const opt2 = require('../store').opt2;
const opt3 = require('../store').opt3;
const opt4 = require('../store').opt4;
const opt5 = require('../store').opt5;
// imported objects with further options for user to choose
router.route('/').post((req, res) => {
    let response = {};
    // conditional used to respond with right set of options accordingly to choose option by user.
    // can be use switch to assign right set of options to "response"
    let choiceNum = req.body.answer;
    if (choiceNum === 1) {
        response = opt1;
    } else if (choiceNum === 2) {
        response = opt2;
    } else if (choiceNum === 3) {
        response = opt3;
    } else if (choiceNum === 4) {
        response = opt4;
    } else if (choiceNum === 5) {
        response = opt5;
    }
    res.send(response);
});

module.exports = router;
