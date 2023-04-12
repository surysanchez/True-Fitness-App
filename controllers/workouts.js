const Workout = require('../models/workout');
module.exports = {
    index,
    show,
    new: newWorkout,
    create,
    edit,
    update
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
  req.body.equipment = !! req.body.equipment
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
    try {
        await Workout.create(req.body);
        res.redirect('/workouts');
    } catch(err) {
        console.log(err);
        res.render('workouts/index', {title: 'Workouts', errorMsg: err.message});
    }
}

async function edit(req, res) {
    const workout = await Workout.findById(req.params.id, req.user._id);
    res.render("workouts/edit", { title: "Edit Workout", workout });
  }
  
  async function update(req, res) {
    req.body.equipment = !! req.body.equipment
    // req.body.completed_on += 'T00:00'
    try {
      const workout = await Workout.findByIdAndUpdate(
        req.params.id,
         req.body
        // req.user._id,
        // { new: true }
      );
      res.redirect("/workouts");
    } catch (err) {
      console.log(err);
      res.render("workouts/edit", {
        title: "Edit Workout",
        recipe: req.body,
        errorMsg: err.message
      });
    }
  }