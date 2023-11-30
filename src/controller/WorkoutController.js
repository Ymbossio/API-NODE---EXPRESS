const Services = require('../services/WorkoutService');


const WorkoutAll = (req, resp)=>{
    const Workout = Services.WorkoutAll();
    resp.send({ status : 'Ok', data: WorkoutAll});
}

const OneRegister = (req, resp)=>{
    const register = Services.OneRegister();
    resp.send('Get Register')
}

const CreateRegister = (req, resp)=>{
    const CreateRegister = Services.CreateRegister();
    resp.send('Create Register');
}

const UpdateRegister = (req, resp)=>{
    const UpdateRegister = Services.UpdateRegister();
    resp.send('Update Register');
}

const DeleteRegister = (req, resp)=>{
    const DeleteRegister = Services.DeleteRegister();
    resp.send('Delete Register');
}

module.exports = {
    WorkoutAll,
    OneRegister,
    CreateRegister,
    UpdateRegister,
    DeleteRegister
}