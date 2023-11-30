const express = require('express');
App = express();
Port = 3000;
const Routes = require('./routes/index');
const Routes_Workout = require('./routes/all');


App.use('/Inicio/v1', Routes);
App.use('/Workout', Routes_Workout);


App.listen(Port, ()=>{
    console.log(`Run Proyect port on ${Port}`);
});