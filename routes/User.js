const passport = require('../config/passport');
const User = require('../models/User.model');
const router = require('express').Router();
const mongoose = require('mongoose');

router.route('/').get((req, res) => {});
module.exports = router;
