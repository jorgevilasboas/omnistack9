const express = require('express');

const routes = express.Router();

routes.get('/users/:id', (req, res) => {
    //by query
    let idade = req.query.idade;
    //by params
    let id = req.params.id;
    return res.json({ message: "Hello", idade, id });

});

routes.post('/users', (req, res) => {
    //by body    
    return res.json(req.body);
});

module.exports = routes;