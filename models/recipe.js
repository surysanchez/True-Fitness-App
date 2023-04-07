const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  name: {type: String},
//   timeCooking: {
//     type: Number,
//      match: []
//     min: 0
// },
    ingredients: {
        type: String,
    },
    instructions: {
        type: String
    },
    reviews: [String]

}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);