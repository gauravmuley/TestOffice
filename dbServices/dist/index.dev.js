"use strict";

var express = require('express');

var bodyParser = require('body-parser'); //const cors = require("cors");


var app = express();
var port = 8081;

var db = require('./queries');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/users', db.getUsers);
app.get('/fees', db.getFees);
app.post('/addrec', db.createUser);
app.post('/addtreat', db.createTreatment);
app.get('/loginStat', db.getLoginUser);
app["delete"]('/delusers/:id', db.deleteUser);
app["delete"]('/deltreat/:id', db.deleteTreat); // app.get('/fees', db.getFees)

app.put('/users/:id', db.updateUser);
app.get('/users/:id', db.getUserById);
app.put('/fees/:id', db.updateTreat);
app.get('/fees/:id', db.getTreatById);
app.post('/addptdata', db.createPatient);
app.post('/addchk', db.createChklist);
app.get('/', function (request, response) {
  response.json({
    info: 'Node.js, Express, and Postgres API'
  });
});
app.listen(port, function () {
  console.log("App running on port ".concat(port, "."));
});