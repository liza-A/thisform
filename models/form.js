// require mongoose
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
// this helps us capture our user name.
const passportLocalmongoose = require('passport-local-mongoose')

// create schema
const formSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // the example above means data is a string and it's required
    gname: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        required: true
    },
    place: {
        type: String,
        required: true,
        
    },
    occupation: {
        type: String,
        required: true,

    },
    nationality: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    }
});
// export schema
const Form = module.exports = mongoose.model('Form', formSchema);