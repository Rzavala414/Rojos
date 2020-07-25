const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

userRouter.get('/register', (req, res) => {
    res.render('register');
})

userRouter.post('/register', async(req, res) => {
    const {email, password, password2} = req.body;

    //verifying if user fields are all entered
    if(!email || !password || !password2){
        res.redirect('register');
    }

    if(password !== password2){
        res.redirect('register')
    }

    try {
        const newUser = await User.create({
            email,
            password
        })

        bcrypt.genSalt(10, () => {
            bcrypt.hash(newUser.password, 10, (err, hash) => {
                if(err) throw err;
                //Set password to hashed
                newUser.password = hash;
                // Save user
                newUser.save()
            })
        })

        res.redirect('login')
    } catch (error) {
        console.log(error);
    }
})


module.exports = userRouter;