const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');

// GET /recipes
router.get('/', recipesCtrl.index);

// GET / recipes/:id
router.get('/:id', recipesCtrl.show);




module.exports = router;