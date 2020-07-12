var User = require('../models/user')
var Session = require('../models/session')

exports.registerUser = async function(req, res, next){

		body = req.body
		
		if(!body) return res.status(400).json({msg: 'Missing User details'})

		User.findOne({email:body.email}, (err, 	result) => {
			
			if(!result) {

				//create new user
				var newUser = new User({
					name: body.name,
					gender: body.gender,
					email: body.email
				})

				//Insert new user
				newUser.save(function(err, result){
					if(result) {

						var newUserSession = new Session({
							userId: result._id,
							token: body.token
						})

						//Create session for new user
						newUserSession.save(function(err, result){
							return res.status(200).json({msg:'User registered'})
						});

					}else {
						return res.status(500).json({msg:'Failed to register, try again later..'})
					}
				});

			}else{

				//Update session details for already registerd user
				//This only changes the newly fetched token
				Session.updateOne({userId: result._id}, {
					token: body.token

				}, function(err, result) {
					return res.status(200).json({msg:"User token refreshed"})
				})
			}

		});	
}