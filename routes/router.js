const router = require('express').Router();
const userRouter = require('./auth');
const eventsRouter = require('./events')
const passport = require('passport');
router.use('/events', eventsRouter)
router.use('/', userRouter);

router.get('/', (req, res) => {
    res.render('home', {
        layout: 'home'
    });
})

router.get('/login', (req, res) => {
    res.render('login');
})

//Login Handle
router.post('/login', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/events'
    })(req, res, next);
});


module.exports = router;