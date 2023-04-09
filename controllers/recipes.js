const Recipe = require('../models/recipe');

module.exports = {
    index,
    show
    // create,
    // new: newRecipe

}

async function index(req, res) {
    const recipes = await Recipe.find({});
    res.render('recipes/index', {
        title: 'All Recipes', recipes });
} 

async function show(req, res) {
    const recipe = await Recipe.findById(req.params.id);
    res.render('recipes/show', { title: 'Recipes Details' , recipe }) ;

}
// async function create(req, res) {
//     const newRecipe = new Recipe();
//     try {
//         await Recipe.create(req.body);
//         res.redirect(`/recipes/${recipe._id}`);

//     } catch(err) {
//         console.log(err);
//         res.render('/recipes/new', { errorMsg: err.message});
//     }
// } 

//  function newRecipe(req, res) {
//     res.render('recipes/new', {errorMsg: ''});

// }