var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/members', { useNewUrlParser: true });



const cors = require('cors');
app.use(cors({
    origin:"http://localhost:4200"
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => console.log('Server started on port 3000'));
// });
module.exports = app;
