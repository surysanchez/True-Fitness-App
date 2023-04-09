const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteReview
};

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

async function deleteReview(req, res){
    const recipe = await Recipe.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id });
    
    if(!recipe) return res.redirect('/recipes');
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`);

}