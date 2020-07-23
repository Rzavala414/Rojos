const express = require('express');
const router = require('./routes/router');
const dotenv = require('dotenv')
const exphbs = require('express-handlebars');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 8080;

//Default File is public
app.use(express.static(path.join(__dirname, 'public')));

// Express Handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//Routes
app.use('/', router)


app.listen(PORT, () => console.log(`app listening on http://localhost:${PORT}`));