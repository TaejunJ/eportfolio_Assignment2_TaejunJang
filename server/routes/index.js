/*
Name: Taejun Jang
Student Number: 301228129
File: index.js
Date: Sep 28, 2022
*/
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/homePage', indexController.displayHomePage);

/* GET About Me page. */
router.get('/aboutMe', indexController.displayAboutMePage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* USE Contact Me page. */
router.use('/contactMe', indexController.displayContactMePage);

//Get Route for the displaying Login page
router.get('/login', indexController.displayLoginPage);

//Post Route for the processing Login page
router.post('/login', indexController.processLoginPage);

//Get Route for the displaying register page
router.get('/register', indexController.displayRegisterPage);

//Post Route for the processing register page
router.post('/register', indexController.processRegisterPage);

//Get Route for performing logout page
router.get('/logout', indexController.performLogout);

module.exports = router;
