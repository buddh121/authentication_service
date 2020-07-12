//import express library
const express = require('express')
var mongoose = require('mongoose')
const bodyParser = require('body-parser');

//import environemnt variables
require('dotenv').config({path: __dirname + '/.env'})

//import routes
var routes = require('./routes.js')

//create a new app
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//Register routes
app.use('/',routes)

//mongodb connection from .env
const IP = process.env.MONGO_IP
const PORT = process.env.MONGO_PORT
const dbName = process.env.DB
mongoose.connect(`mongodb://${IP}:${PORT}/${dbName}`, 
	{
		useUnifiedTopology: true, 
		useNewUrlParser: true
})
.then(()=> console.log('DB connected'))
.catch(err=>{
	console.log('DB connenction error')
});

// app.use(express.static(__dirname + '/public'))
app.listen(4000, ()=>{
	console.log('Server listening on port: 4000')
})


