const Recipe = require('..models/recipe');

module.exports = {
    index

}

async function index(req, res) {
    const recipes = await Recipes.find({});
    res.render('recipes/index', {
        title: 'All Recipes', recipes });
} 