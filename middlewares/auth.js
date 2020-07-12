
//Middleware responsible for checking the token validity
var Session = require('../models/session')

module.exports = function(req, res, next) {

  const token = req.headers.token

  if (!token) return res.status(401).json({ message: "Auth Error, Missing token" });

  Session.findOne({token: token}, function(err, result){
    if (! result){
      return res.status(401).json({msg: 'Invalid token'})
    }
    next();
  });  

}
  
