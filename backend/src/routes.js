const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),  SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

/*
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
*/

module.exports = routes;