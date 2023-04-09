const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


// POST /recipe/:id/reviews
router.post('/recipes/:id/reviews', reviewsCtrl.create);

// DELETE /reviews/:id
router.delete('/reviews/:id', reviewsCtrl.delete)

module.exports = router;