const express = require('express')
const userRouter = express.Router()

userRouter.get('/register', (req, res) => {
    res.render('register');
})

module.exports = userRouter;