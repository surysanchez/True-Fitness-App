const Workout = require('../models/workout');


module.exports = {
    index,
    show,
    new: newWorkout,
    create

}
async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', {
        title: 'All Workouts', workouts });
} 

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/show',{ workout});

}

function newWorkout(req, res) {
    res.render('workouts/index', {title: 'Add Workout', errorMsg: ''});
}

async function create(req, res) {
    // const newWorkout = new Workout();
    try {
        await Workout.create(req.body);
        res.redirect('/workouts')

    } catch(err) {
        console.log(err);
        res.redirect('/workouts/index');
    }
}