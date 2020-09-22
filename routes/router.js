const router = require('express').Router();
const userRouter = require('./auth');
const eventsRouter = require('./events');
const passport = require('passport');
const Event = require('../models/Event');
router.use('/events', eventsRouter);
router.use('/', userRouter);


// @desc Displays the landing page
// @route GET /
router.get('/', async(req, res) => {
    try {
        const event = await Event.find()
        .populate('user')
        .lean()

        console.log('home event:', event);

        res.render('home',{
            event: event
        });

    } catch (error) {
        console.log(error);
        res.render('error/500');
    }
});

router.get('/login', (req, res) => {
    res.render('login');
})

// @desc Displays login page and authenticates them
// @route GET /login
router.post('/login', (req, res, next) => {
    console.log('login successful')
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
    })(req, res, next);
});

// logout user
router.get('/logout', (req, res) => {
    console.log('logout Successful')
    req.logout();
    res.redirect('/');
});

module.exports = router;