const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');

// GET /recipes
router.get('/', recipesCtrl.index);
// //GET /recipes/new
router.get('/index', recipesCtrl.new);
// GET /reviews/:id/edit
router.get('/:id/edit', recipesCtrl.edit);

// GET / recipes/:id
router.get('/:id', recipesCtrl.show);

// // POST /recipes
//  router.post('/index', recipesCtrl.create);
router.post('/', recipesCtrl.create);

// PUT /reviews/:id
 router.put('/:id', recipesCtrl.update);

 //DELETE /recipes/:id
//  router.delete('/:id', recipesCtrl.delete);

module.exports = router;