const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get("/",studentController.getAllStudents);

module.exports =router;