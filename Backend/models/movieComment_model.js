const mongoose = require('mongoose');

const movieCommentsSchema = new mongoose.Schema({
    movieName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        required : true
    }
});

module.exports = mongoose.model('MovieComments',movieCommentsSchema)