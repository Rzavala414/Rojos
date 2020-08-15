const eventsRouter = require('express').Router();
const Event = require('../models/Event');

// Show users dashboard
eventsRouter.get('/dashboard', (req, res, next) =>{
    res.render('events/dashboard')
});

// Displays the add event page
eventsRouter.get('/add', (req, res, next) =>{
    res.render('events/add')
});

// Creates an Event 
eventsRouter.post('/',  async(req, res, next) =>{
    try {
        
        await Event.create(req.body)
        res.redirect('/events/dashboard');
    } catch (error) {
        console.log(error)
        res.render('error/500')
    }
    
});

// Displays the Edit event page
eventsRouter.get('/edit', (req, res, next) =>{
    res.render('events/edit')
});


module.exports = eventsRouter;