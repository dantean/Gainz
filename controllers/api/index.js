const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const workoutRoutes = require('./workoutapi')
const favoriteRoutes = require('./favoriteRoutes')
//http://localhost:3001/api/users
router.use('/users', userRoutes);

//http://localhost:3001/api/posts
router.use('/posts', postRoutes);

//http://localhost:3001/api/favorites

router.use("/favorites", favoriteRoutes)

//http://localhose:3001/api/workouts
 
router.use("/workouts", workoutRoutes)
module.exports = router;