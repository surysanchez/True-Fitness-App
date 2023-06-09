const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
    } ,
    level: {type: String},

    equipment: {
        type: Boolean,
         default: false
    },
    // completed_on: Date
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);



