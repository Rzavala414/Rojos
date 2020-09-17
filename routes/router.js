const router = require('express').Router();
const userRouter = require('./auth');
const eventsRouter = require('./events');
const passport = require('passport');
const Event = require('../models/Event');
router.use('/events', eventsRouter);
router.use('/', userRouter);

router.get('/', async(req, res) => {
    try {
        const event = await Event.find().lean();
        res.render('home',{
            event
        });
    } catch (error) {
        console.log(error);
        res.render('error/500');
    }
})

router.get('/login', (req, res) => {
    res.render('login');
})

//Login Handle
router.post('/login', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
    })(req, res, next);
});


module.exports = router;