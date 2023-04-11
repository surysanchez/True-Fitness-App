const Workout = require('../models/workout');
module.exports = {
    index,
    show,
    new: newWorkout,
    create
}
async function index(req, res) {
    console.log('Hi')
    const workouts = await Workout.find({});
    console.log(workouts)
    res.render('workouts/index', {
        title: 'All Workouts', workouts });
} 

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/show',{ workout});
}

async function newWorkout(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', {title: 'Add Workout', errorMsg: '',workouts });
}

async function create(req, res) {
    try {
        await Workout.create(req.body);
  
        res.redirect('/workouts');
    } catch(err) {
        console.log(err);
        res.render('workouts/index', {title: 'Workouts', errorMsg: err.message});
    
    }
    console.log(newWorkout)
}

