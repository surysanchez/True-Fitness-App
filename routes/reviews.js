const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /recipe/:id/reviews
router.post('/recipes/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

// GET /reviews/:id/edit
router.get('/reviews/:id/edit', reviewsCtrl.edit);

// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

// PUT /reviews/:id
 router.put('/reviews/:id/edit', reviewsCtrl.update);



module.exports = router;