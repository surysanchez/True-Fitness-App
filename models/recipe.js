const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema ({
    content: {
        type: String,
         required: true
    },
    rating: {
        type: Number,
        min:1,
        max:5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    userName: String,
    userAvatar: String

}, {
    timestamps: true
});


const recipeSchema = new Schema({
  name: {type: String},
  
   timeCooking: {
     type: Number,     
        min: 0
 },
    ingredients: {
        type: String,
    },
    instructions: {
        type: String
    },
    reviews: [reviewsSchema]

}, {
    timestamps: true
});


module.exports = mongoose.model('Recipe', recipeSchema);