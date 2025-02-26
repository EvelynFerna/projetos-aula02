const express = require('express');
const routes = express.Router();

const feedbacks =require('./controllers/feedbacks');

routes.get('/',(req,res) =>{
    res.json({titulo: 'Registro de Feedbacks'})
});

routes.post('/feedbacks', feedbacks.create);
routes.get('/feedbacks', feedbacks.read);
routes.put('/feedbacks/:id', feedbacks.update);
routes.delete('/feedbacks/:id', feedbacks.del);

module.exports = routes;