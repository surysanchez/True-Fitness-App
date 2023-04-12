const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

console.log('Workout route')
// GET /workouts
router.get('/', workoutsCtrl.index);

// GET /workouts/new
router.get('/index', ensureLoggedIn, workoutsCtrl.new);

// GET /workouts/:id/edit
router.get('/:id/edit', ensureLoggedIn, workoutsCtrl.edit);

// GET /workouts/:id 
router.get('/:id', workoutsCtrl.show);

// POST //workouts
router.post('/',ensureLoggedIn, workoutsCtrl.create);

// PUT /workouts/:id
router.put('/:id',ensureLoggedIn,  workoutsCtrl.update);

module.exports = router;