const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        max
    }
    
}, {})









module.exports = mongoose.model('Workout', workoutSchema);