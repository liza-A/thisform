const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');
//requiring the model so that it can be used
const Form = require('../models/form');

//route for accessing/viewing the vehicle registration page
router.get('/form', (req, res) => {
    res.render('form')
});

//route for the post method
router.post('/form', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const name = req.body.name
    const gname = req.body.gname
    const date = req.body.date
    const place = req.body.place
    const occupation = req.body.occupation
    const nationality = req.body.nationality
    const category = req.body.category
    const gender = req.body.gender
    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        res.render('form')
    }
    else {
        let newForm = new Form({
//value(as used in the schema): property(as used in the form as the name of the input type)
            name:name,
            gname: gname,
            date: date,
            place: place,
            occupation: occupation,
            nationality: nationality,
            category: category,
            gender: gender,
            
        });
        
        newForm.save((err) =>{
            if(err){
                console.error(err);
                return;
            }
            else{
                console.log('data saved in database');
                res.redirect('/display')
            }
        }) 
    }
});
module.exports = router;