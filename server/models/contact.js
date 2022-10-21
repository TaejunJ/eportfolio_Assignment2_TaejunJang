/*
Name: Taejun Jang
Student Number: 301228129
File: user.js
Date: Oct 20, 2022
*/

let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);