const express = require('express');
const routes = express.Router();

routes.get('/', (req, resp)=>{
    resp.send('<h1>Bienvenido al inicio</h1>');
});



module.exports = routes;