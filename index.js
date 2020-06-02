var express = require('express');
var app = express();

var users = require('./users.js');

app.use('/app', users);
app.set('view engine', 'pug');
app.set('views','./views');
app.listen(3000);
