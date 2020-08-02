const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

userRouter.get('/register', (req, res) => {
    res.render('register');
})

userRouter.post('/register', async(req, res) => {
    const {email, password, password2} = req.body;

    //verifying if user fields are all entered
    if(!email || !password || !password2){
        res.redirect('register');
    }

    // checking if passwords match
    if(password !== password2){
        res.redirect('register')
    }

    try {
        // creating new user
        const newUser = await User.create({
            email,
            password
        })

        // Hashing password
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