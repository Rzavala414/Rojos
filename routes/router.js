const router = require('express').Router();
const userRouter = require('./auth');
const passport = require('passport');
router.use('/', userRouter);

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    res.render('login');
})

//Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/events',
      failureRedirect: '/login'
    })(req, res, next);
});

router.get('/events', (req, res) => {
    res.send('Im the events page')
})

module.exports = router;