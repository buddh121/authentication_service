var mongoose = require('mongoose')

//define role schema
const RoleSchema = new mongoose.Schema({
	userId: mongoose.Schema.Types.ObjectId,
	role: String
})

const Role = mongoose.model('Role', RoleSchema)
module.exports = Role