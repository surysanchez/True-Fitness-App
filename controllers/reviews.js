const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteReview,
     edit,
     update
};

async function create(req, res) {
    const recipe = await Recipe.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    recipe.reviews.push(req.body);
    try {
        await recipe.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/recipes/${recipe._id}`);
}

 async function deleteReview(req, res){
     const recipe = await Recipe.findOne({'reviews._id': req.params.id,'reviews.user': req.user._id});
     console.log(recipe)
     if(!recipe) return res.redirect('/recipes');
     recipe.reviews.remove(req.params.id);
     await recipe.save();
     res.redirect(`/recipes/${recipe._id}`);
 }


 async function edit(req, res) {
     const review = await Review.findById({'reviews._id':req.params.id, 'reviews._user': req.user.id });
     res.render('reviews/edit',{title: 'Edit Review', review} );
 }

 async function update(req, res) {
     try {
         const review = await Review.findByIdAndUpdate({ 'reviews._id': req.params.id, 'reviews._id':req.body,'reviews._user': req.user._id , new: true});
     } catch (err) {
         console.log(err);
         res.render('reviews/edit', {title: 'Edit Review', review: req.body, errorMsg: err.message});
     }
 }
