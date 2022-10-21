/*
Name: Taejun Jang
Student Number: 301228129
File: user.js
Date: Sep 28, 2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//Connect to Login model
let Contact = require('../models/contact');

// helper function for guard function
function requireAuth(req, res, next)
{
    //check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let contactController = require('../controllers/contact');
//Get Route for the Contact List -read

router.get('/', contactController.displayContactList);

//Get Route for the displaying Add page - create
router.get('/add', requireAuth, contactController.displayAddPage);

//Post Route for the processing Add page - create
router.post('/add', requireAuth, contactController.processAddPage);

//Get Route for the displaying Edit page - update
router.get('/update/:id', requireAuth, contactController.displayEditPage);

//Post Route for the processing Edit page - update
router.post('/update/:id', requireAuth, contactController.processEditPage);

//Get to perform Deletion - delete
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;