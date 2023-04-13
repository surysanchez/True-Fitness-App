const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /recipe/:id/reviews
router.post('/recipes/:id/reviews', ensureLoggedIn, reviewsCtrl.create);


// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);




module.exports = router;