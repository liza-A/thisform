const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');
const Forms = require('../models/form');


//retrieve form details
router.get('/display', async(req, res) => {
    
    try{
        const data = await Forms.find({});
        console.log('>>>> all form details' ,data)
        res.render('display', {
            forms : data,
            
          })
    }
    catch(error) {
        return res.status(400).send(
            {
                status: 400,
                message: 'failed to fetch all',
                error
            });
    }
});
//delete vehicle
router.get('/deleteVehicle/:id',async(req, res) => {
    try{
        await Forms.deleteOne({_id:req.params.id})
        res.redirect('/display');
    }
    catch{
        res.status(400).send('unable to delete from database')
    }

});
module.exports = router;