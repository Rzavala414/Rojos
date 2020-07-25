const express = require('express')
const userRouter = express.Router()

userRouter.get('/register', (req, res) => {
    res.render('register');
})

userRouter.post('/login', (req, res) => {
    console.log(req.body)
    // const {email, password, password2} = req.body;
    
})
module.exports = userRouter;