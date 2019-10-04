const express = require('express');

const routes = express.Router();

routes.get('/users/:id', (req, res) => {
    //by query /users/1/?idade=30
    let idade = req.query.idade;
    //by params /users/1/
    let id = req.params.id;
    return res.json({ message: "Hello", idade, id });

});

routes.post('/users', (req, res) => {
    //by body    
    return res.json(req.body);
});

module.exports = routes;