const eventsRouter = require('express').Router();
const Event = require('../models/Event');

eventsRouter.get('/dashboard', (req, res, next) =>{
    res.render('events/dashboard')
});

eventsRouter.get('/add', (req, res, next) =>{
    res.render('events/add')
});

eventsRouter.post('/', (req, res, next) =>{
    
    res.redirect('/events/dashboard')
    
});

eventsRouter.get('/edit', (req, res, next) =>{
    res.render('events/edit')
});


module.exports = eventsRouter;