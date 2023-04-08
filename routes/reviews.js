const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


// POST /recipe/:id/reviews
router.post('/recipes/:id/reviews', reviewsCtrl.create);


module.exports = router;