const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const workoutRoutes = require('./workoutapi')

//http://localhost:3001/api/users
router.use('/users', userRoutes);

//http://localhost:3001/api/posts
router.use('/posts', postRoutes);

//http://localhose:3001/api/workouts
 
router.use("/workouts", workoutRoutes)
module.exports = router;
