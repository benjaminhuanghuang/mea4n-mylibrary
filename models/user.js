var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = required('mongoose-unique-validator');

var schema = new Schema({
    account: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        ref: 'User'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        type: Schema.Types.ObjectId, ref: 'Message'
    }]
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);