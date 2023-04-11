const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

console.log('Workout route')
// GET /workouts
router.get('/', workoutsCtrl.index);

// GET /workouts/new
router.get('/index', ensureLoggedIn, workoutsCtrl.new);

// GET /movies/:id 
router.get('/:id', workoutsCtrl.show);

// POST //workouts
router.post('/',ensureLoggedIn, workoutsCtrl.create);

module.exports = router;