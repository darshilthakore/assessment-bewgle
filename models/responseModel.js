const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const responseSchema = new Schema({
   date: {
       type: Date
   },
   method: {
       type: String,
   },
   headers: [Object],
   path: {
       type: String
   },
   query: [Object],
   body: [Object],
   duration: {
       type: Number
   }
}, {
    timestamps: false
});

var Responses = mongoose.model('Response', responseSchema);

module.exports = Responses;