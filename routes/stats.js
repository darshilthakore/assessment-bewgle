const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Responses = require('../models/responseModel');

const statsRouter = express.Router();

statsRouter.use(bodyParser.json());

statsRouter.route('/')
.get((req,res,next) => {    

    Responses.aggregate([
        {
            $group: {
                _id: "$method",
                average_response: {$avg: "$duration"},
                total: {$sum:1}
            },
        }
    ]).then( response => {
        console.log(response);
        res.json(response);
    })

});

statsRouter.route('/:fromDate&:toDate')
.get((req,res,next) => {    

    fromDate = new Date(req.params.fromDate);
    toDate = new Date(req.params.toDate);
    Responses.aggregate([
        {
            "$match": {
                "date": {
                    "$gte": fromDate,
                    "$lte": toDate
                }
            }
        },
        {
            $group: {
                _id: "$method",
                average_response: {$avg: "$duration"},
                total: {$sum:1}
            },
        }
    ]).then( response => {
        console.log(response);
        res.json(response);
    })

});

module.exports = statsRouter;
