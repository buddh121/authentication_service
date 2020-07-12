var express = require('express');
var router = express.Router();

//Import controllers
var Oauth2Controller = require('./controllers/oauth2_controller')
var UserController = require('./controllers/user_controller')
var ResourceController = require('./controllers/resource_controller')

//import middleware
var auth = require('./middlewares/auth')
var authrize = require('./middlewares/authrize')

//define routes
router.get('/login', Oauth2Controller.getUserToken)
router.get('/home', Oauth2Controller.getAuthenticationToken)
router.post('/register', UserController.registerUser)
router.get('/list',auth, authrize(['admin','user']), ResourceController.listResource)
router.post('/create', auth, authrize(['admin']),ResourceController.createResource)

//exports all available routes
module.exports = router;


