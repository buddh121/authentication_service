var Role = require('../models/roles')
var ObjectId = require('mongodb').ObjectId

function authorize(roles =[]) {

	//Single role or array of roles ['admin', 'user'] or just 'admin'
	if (typeof roles === 'string') {
        roles = [roles];
    }

  return[

    (req, res, next) =>{

    	if (!req.headers.userid) return res.status(400).json({msg:"Missing userId"})

    	Role.findOne({userId: ObjectId(req.headers.userid)}, function(err, result){

    	if (!roles.includes(result.role)) return res.status(401).json(
    		{
    			msg: 'You are not autherize to access thi resource'
    	})

    	next()

    });
    
    }
    ]
    
}


module.exports = authorize;
