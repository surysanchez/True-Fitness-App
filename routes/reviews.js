const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


// POST /recipe/:id/reviews
router.post('/recipes/:id/reviews', reviewsCtrl.create);

// DELETE /reviews/:id
router.delete('/reviews/:id', reviewsCtrl.delete);

// GET /reviews/:id/edit
router.get('/reviews/:id/edit', reviewsCtrl.edit);

// PUT /reviews/:id
router.put('/reviews/:id', reviewsCtrl.update);

module.exports = router;