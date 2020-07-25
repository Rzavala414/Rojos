const router = require('express').Router();
const userRouter = require('./auth')
router.use('/', userRouter);

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', (req, res) => {
    
})


module.exports = router;