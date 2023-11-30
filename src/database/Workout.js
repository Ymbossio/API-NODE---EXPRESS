const DB = require('./db.json');

const All = ()=>{
    return DB.workouts;
}


module.exports = {All}