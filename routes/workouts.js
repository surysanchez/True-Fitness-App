const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');


// GET /workouts
router.get('/', workoutsCtrl.index);

// GET /movies/:id 
router.get('/:id', workoutsCtrl.show);



module.exports = router;