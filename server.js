const express = require('express');
const router = require('./routes/router');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const connectDB = require('./config/database');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 8080;

//Enable dotenv to config file
require('dotenv').config({ path: './config/keys.env' });

//Connect Database
connectDB();

//Default File is public
app.use(express.static(path.join(__dirname, 'public')));


// Express Handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

//Body parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use(methodOverride('_method'))

//Routes
app.use('/', router)

app.listen(PORT, () => console.log(`app listening on http://localhost:${PORT}`));