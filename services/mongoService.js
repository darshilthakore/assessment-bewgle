const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/bewgle';

const mongoConnect = mongoose.connect(url);

module.exports = { mongoConnect }