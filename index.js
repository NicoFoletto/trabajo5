const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
require('./database');

//middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));

//routes
app.use('/api', require('./routes/users.routes'));
app.use(('/login' , require('./routes/login.routes')));




//settings
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), console.log('server on port', app.get('port')));