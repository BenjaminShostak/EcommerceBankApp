const moment = require('moment');
const express = require('express');
const path = require('path');
const app = express();
const members = require('./Members');
const logger = require('./middleware/logger.js')


const logger = (req,res, next) => {
    // console.log('Hello');
    console.log(`${req.protocol}://${req.get('host')}${originalUrl}: ${moment().format()}`);
    next();
};
 
//Init middleware
app.use(logger);