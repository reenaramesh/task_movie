const mongoose = require('mongoose');
const express = require("express");
// const timestamp = require('mongoose-timestamp');
// const autoIncrement = require('mongoose-auto-increment');

const reviewSchema = new mongoose.Schema({

    movie_name: {
        type: String,
        required: true
	},
	reviews: {
		type: String,
		required: true
	},
   


});



const Reviews = new mongoose.model('Reviews', reviewSchema);
module.exports = Reviews;