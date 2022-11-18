const mongoose = require('mongoose');
// const timestamp = require('mongoose-timestamp');
// const autoIncrement = require('mongoose-auto-increment');

const actorSchema = new mongoose.Schema({

    movie_name: {
    type: String,
    required: true
	},

    actors: {
        type: String,
        required: true
        },
    


});



const Actors = new mongoose.model('Actors', actorSchema);
module.exports = Actors;