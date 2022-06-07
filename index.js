const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require ('express-validator');
const expressPinoLogger = require('express-pino-logger');
const logger = require('./loggerFile/logger');

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const cors = require('cors')
//const config = require('./config/database');
const formRoute = require('./routes/formRoute');
const displayRoute = require('./routes/displayRoute');

// Instantiating the app/server
const app = express();


// creating a connection between the controller and database
// mongoose.connect(config.database)
// const db = mongoose.connection
// checking if we've connected
// db.once('open',()=>{
//     logger.info('connected to mongodb');
// });
// db.on('error', (err)=>{
// logger.error(err);
// });

//don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//   //use morgan to log at command line
//   app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

// Setting up the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 
app.use(express.urlencoded({extended:false}));
// telling body parser to use json format
app.use (express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);
app.use('/', formRoute);
app.use('/', displayRoute);
app.get('*', (req, res) => {
  res.status(404).send('This is an invalid URL')
})

app.listen(4000,()=>{
    logger.info('server started on port 4000')
});

module.exports = app; // for testing