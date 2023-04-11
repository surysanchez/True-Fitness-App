const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
    } ,
    level: {type: String},

    completed: {
        type: Boolean
        // default: true
    } 
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);









module.exports = mongoose.model('Workout', workoutSchema);