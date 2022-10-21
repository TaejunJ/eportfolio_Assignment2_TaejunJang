/*
Name: Taejun Jang
Student Number: 301228129
File: user.js
Date: Sep 28, 2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
