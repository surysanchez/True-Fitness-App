const Recipe = require("../models/recipe");

module.exports = {
  index,
  show,
  create,
  new: newRecipe,
  edit,
  update,
  delete: deleteRecipe,
};

async function edit(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const recipe = await Recipe.findById(req.params.id, req.user._id);
  res.render("recipes/edit", { title: "Edit Recipe", recipe });
}

async function update(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  // req.body.recipe = !!req.body.recipe;
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      req.user._id,
      { new: true }
    );
    console.log(req.body);
    res.redirect("/recipes");
  } catch (err) {
    console.log(err);
    res.render("recipes/edit", {
      title: "Edit Recipe",
      recipe: req.body,
      errorMsg: err.message,
    });
  }
}

async function index(req, res) {
  const recipes = await Recipe.find({});
  res.render("recipes/index", {
    title: "All Recipes",
    recipes,
  });
}

async function show(req, res) {
  const recipe = await Recipe.findById(req.params.id);
  res.render("recipes/show", { title: "Recipes Details", recipe });
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const newRecipe = new Recipe();
  try {
    await Recipe.create(req.body);
    res.redirect("/recipes");
  } catch (err) {
    console.log(err);
    res.render("recipes/index", {
      title: "Recipe Details",
      errorMsg: err.message,
    });
  }
}

function newRecipe(req, res) {
  res.render("recipes/index", { title: "Add Recipe", errorMsg: "" });
}

async function deleteRecipe(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const recipe = await Recipe.findByIdAndDelete(req.params.id, req.user._id);
  res.redirect("/recipes");
}
