var mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
	userId: mongoose.Schema.Types.ObjectId,
	token: String
})

//compile session model
const Session = mongoose.model('Session', SessionSchema)
module.exports = Session