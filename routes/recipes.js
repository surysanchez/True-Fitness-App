const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');

// GET /recipes
router.get('/', recipesCtrl.index);

// GET / recipes/:id
router.get('/:id', recipesCtrl.show);

// // POST /recipes
// router.post('/', recipesCtrl.create);

// //GET /recipes/new
// router.get('/new', recipesCtrl.new);




module.exports = router;