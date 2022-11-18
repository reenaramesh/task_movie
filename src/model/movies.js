const mongoose = require('mongoose');
// const timestamp = require('mongoose-timestamp');
// const autoIncrement = require('mongoose-auto-increment');

const movieSchema = new mongoose.Schema({

    movie_name: {
    type: String,
    required: true
	},
	reviews: {
		type: String,
		required: true
	},
    actors: [String],


});



const Movies = new mongoose.model('Movies', movieSchema);
module.exports = Movies;