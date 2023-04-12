const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
    } ,
    level: {type: String},

    equipment: {
        type: Boolean,
         default: true
    },
    // completed_on: Date
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);



