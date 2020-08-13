const eventsRouter = require('express').Router();

eventsRouter.get('/dashboard', (req, res, next) =>{
    res.render('events/dashboard')
});

eventsRouter.get('/add', (req, res, next) =>{
    res.render('events/add')
});

eventsRouter.get('/edit', (req, res, next) =>{
    res.render('events/edit')
});


module.exports = eventsRouter;