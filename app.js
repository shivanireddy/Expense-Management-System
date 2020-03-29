var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/smartdev');
var db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to db');
});

app.use(bodyParser.json({
    extended:false,
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    extended:false,
    limit: '50mb'
}));

app.use('/', require('./app/controllers/expense.js'));
app.use(express.static(path.join(__dirname,'/public')));

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), () => {
    console.log("Server is running on Port - " + app.get('port'));
});