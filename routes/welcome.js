const welcome = require('../store').welcome;
const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send(welcome);
});

module.exports = router;
