const eventsRouter = require('express').Router();
const Event = require('../models/Event');
const { findOneAndUpdate } = require('../models/Event');

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
  
// @desc Displays the Edit event page with item to update
// @route GET /events/edit/:id
eventsRouter.get('/edit/:id', async (req, res, next) =>{
    try {
        // finds an event with an id that matches the request
      const event = await Event.findOne({
          _id: req.params.id
      }).lean() 

      if(!event){
        return res.render('error/404');
      }else{
          //displays edit page of event and brings data back to frontend
          res.render('events/edit', {
            event: event
          })
      }

    } catch (error) {
        console.log(error)
        return res.render('error/500');
    }
});

// @desc Updates event with matching id
// @route PUT /events/edit/:id
eventsRouter.put('/:id', async(req, res) =>{
    try {
        let event = await Event.findById(req.params.id).lean();
        console.log(event)
        
        if(!event){
            res.render('error/404');
        }else{
            event = await Event.findOneAndUpdate({_id: req.params.id}, req.body, {
                new: true,
                runValidators: true
            })

            res.redirect('/')
        }
    } catch (error) {
        console.log(error);
        return res.render('error/500');
    }
});

// @desc Deletes the id 
// @route Delete /events/edit/:id
eventsRouter.delete('/:id', async(req, res, next) => {

});

module.exports = eventsRouter;