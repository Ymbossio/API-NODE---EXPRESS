const express = require('express');
const routes = express.Router();
const Controller = require('../controller/WorkoutController');

routes.get('/', Controller.WorkoutAll)
routes.get('//workout:id', Controller.OneRegister)
routes.post('/workout:id', Controller.CreateRegister);
routes.patch('/Workout:id', Controller.UpdateRegister);
routes.delete('/Workout:id', Controller.DeleteRegister);



module.exports = routes