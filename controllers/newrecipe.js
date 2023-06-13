// const Recipe = require("../models/recipe");

// module.exports = {
//   create,
//   new: newRecipe,
// };

// async function create(req, res) {
//   req.body.user = req.user._id;
//   req.body.userName = req.user.name;
//   req.body.userAvatar = req.user.avatar;
//   const newRecipe = new Recipe();
//   try {
//     await Recipe.create(req.body);
//     res.redirect("/recipes");
//   } catch (err) {
//     console.log(err);
//     res.render("recipes/new", {
//       title: "Recipe Details",
//       errorMsg: err.message,
//     });
//   }
// }

// function newRecipe(req, res) {
//   res.render("recipes/new", { title: "Add Recipe", errorMsg: "" });
// }
