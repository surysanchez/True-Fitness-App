const express = require("express");
const router = express.Router();

const recipesCtrl = require("../controllers/recipes");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /recipes
router.get("/", recipesCtrl.index);
// // //GET /recipes/new
// router.get("/index", ensureLoggedIn, recipesCtrl.new);
// GET /reviews/:id/edit
router.get("/:id/edit", ensureLoggedIn, recipesCtrl.edit);

// GET / recipes/:id
router.get("/:id", ensureLoggedIn, recipesCtrl.show);

// // POST /recipes
//  router.post('/index', recipesCtrl.create);
// router.post("/", ensureLoggedIn, recipesCtrl.create);

// PUT /reviews/:id
router.put("/:id", ensureLoggedIn, recipesCtrl.update);

//DELETE /recipes/:id
router.delete("/:id", ensureLoggedIn, recipesCtrl.delete);

module.exports = router;
