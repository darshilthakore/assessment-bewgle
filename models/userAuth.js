const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userAuthSchema = new Schema({
    broker: {
        type: String,
        required: true,
    },
    meta: {
        profile: {
            name: String,
            email: String,
        },
        bucketId: Number
    },
    brokerId: String
});

var UserAuths = mongoose.model('UserAuth', userAuthSchema);
module.exports = UserAuths;