const mongoose = require('mongoose');

const movieRatingSchema = new mongoose.Schema({
    movieName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        required : true
    }
});

module.exports = mongoose.model('MovieRating',movieRatingSchema)