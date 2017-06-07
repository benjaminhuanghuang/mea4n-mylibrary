var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    release_date: {
        type: String,
        required: true,
    },
    rate: {
        type: int,
    },
    downloaded: {
        type: String,
    },
});
module.exports = mongoose.model('Message', schema);