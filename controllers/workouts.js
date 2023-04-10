const Workout = require('../models/workout');


module.exports = {
    index,
    show

}
async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', {
        title: 'All Workouts', workouts });
} 

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/index', {workouts}) ;

}
