const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

console.log('Workout route')
// GET /workouts
router.get('/', workoutsCtrl.index);

// GET /workouts/new
router.get('/index', workoutsCtrl.new);

// GET /movies/:id 
router.get('/:id', workoutsCtrl.show);

// POST //workouts
router.post('/', workoutsCtrl.create);

module.exports = router;