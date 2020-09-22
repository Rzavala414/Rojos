const express = require('express');
const router = require('./routes/router');
const exphbs = require('express-handlebars');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const methodOverride = require('method-override');
const connectDB = require('./config/database');
const path = require('path');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 8080;

//Passport config
require('./config/passport')(passport);

//Enable dotenv to config file
require('dotenv').config({ path: './config/keys.env' });

//Connect Database
connectDB();

//Default File is public
app.use(express.static(path.join(__dirname, 'public')));

//Helper functions
const {stripTags, truncate, editIcon, displayEdit} = require('./helpers/hbs');

// Express Handlebars
app.engine('.hbs', exphbs({
    helpers: {
    stripTags,
    truncate,
    editIcon,
    displayEdit
    },
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

//Body parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))


//Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Set global var
app.use(function (req, res, next){
  res.locals.user = req.user || null;
  next();
})


app.use(morgan('dev'));

//Routes
app.use('/', router)

app.listen(PORT, () => console.log(`app listening on http://localhost:${PORT}`));