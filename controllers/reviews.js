const Recipe = require('../models/recipe');

module.exports = {
    create
}

async function create(req, res) {
    const recipe = await Recipe.findById(req.params.id);
    recipe.reviews.push(req.body);
    try {
        await recipe.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/recipes/${recipe._id}`);

}