const express = require('express');
const router = express.Router();

const studentRouters = require('./studentRouters');

router.use('/student',studentRouters);

module.exports = router;