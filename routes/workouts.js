const express = require('express')
const {createWorkout,getWokrout,getWorkouts,deleteWokrout,updateWorkout} = require('../controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

// GET all wokrouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWokrout)

//POST a new wokrkout
router.post('/', createWorkout)

//DELETE
router.delete('/:id', deleteWokrout)

//UPDATE workout
router.patch('/:id', updateWorkout)

module.exports = router