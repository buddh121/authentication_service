
//Middleware responsible for checking the token validity
var Session = require('../models/session')
var ObjectId = require('mongodb').ObjectId

module.exports = function(req, res, next) {

  const token = req.headers.token
  const userId = req.headers.userid

  if (!token || !userId) return res.status(401).json({ message: "Auth Error, Missing token or userId" });

  Session.findOne({userId: ObjectId(userId)}, function(err, result){
    if (result.token != token){
      return res.status(401).json({msg: 'Invalid token'})
    }
    next();
  });  

}
  
