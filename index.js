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
app.use('/usuarios', require('./routes/users.routes'));




//settings
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), console.log('server on port', app.get('port')));