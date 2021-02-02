const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Responses = require('../models/responseModel');

const responseRouter = express.Router();

responseRouter.use(bodyParser.json());

responseRouter.route('/')
.all((req,res,next) => {
    var date = new Date();
    var min = 15,
    max = 30;
    var duration = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(duration);

    var response = {
        date: date.toISOString(),
        method: req.method,
        headers: req.headers,
        path: req.originalUrl,
        query: req.query,
        body: req.body,
        duration: duration
    };

    Responses.create(response)
    .then(async resp => {
        console.log("resp is :", resp);
    }).catch( err => next(err));
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    // setTimeout(res.json(response), duration);
    
    var promise = new Promise( (resolve, reject) => {
        setTimeout(resolve, duration * 1000);
    });

    promise.then(() => {
        res.json(response);
    });



});

module.exports = responseRouter;