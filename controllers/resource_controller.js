exports.listResource = async function(req, res, next) {
	res.status(200).json({msg: 'Listing API called'})
}

exports.createResource = async function(req, res, next) {
	res.status(200).json({msg:'Resource creation API called'})
}