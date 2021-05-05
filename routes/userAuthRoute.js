const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const UserAuths = require('../models/userAuth');

const userAuthRouter = express.Router();

userAuthRouter.use(bodyParser.json());

userAuthRouter.route('/')
.post((req,res,next) => {    

    let userAuthBody = req.body;
    console.log('User Auth body request', userAuthBody);
    let newuserAuth = new UserAuths({
        broker: userAuthBody.broker,
        brokerId: userAuthBody.brokerId,
        meta: {
            bucketId: userAuthBody.bucketId,
        }
    });

    newuserAuth.meta.profile.name = userAuthBody.brokerUserName;
    console.log('Mongo object', newuserAuth);

    newuserAuth.save((err, user) => {
        if (err){
            return next(err);
        }
        res.status(201).json(user);
    } )


});

module.exports = userAuthRouter;