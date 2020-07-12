var mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	name:String,
	gender: String,
	email: String
})

//Compile user model
const User = mongoose.model('User', UserSchema)

module.exports = User;