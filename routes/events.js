const eventsRouter = require('express').Router();

eventsRouter.get('/add', (req, res, next) =>{
    res.render('events/add')
});

eventsRouter.get('/edit', (req, res, next) =>{
    res.render('events/edit')
});
eventsRouter.get('/index', (req, res, next) =>{
    res.render('events/index')
});
eventsRouter.get('/show', (req, res, next) =>{
    res.render('events/show')
});

module.exports = eventsRouter;