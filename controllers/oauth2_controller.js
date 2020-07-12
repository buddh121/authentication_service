const axios = require('axios');

const clientId = process.env.clientId
const clientSecretId = process.env.clientSecretId


exports.getUserToken = async function(req,res, next) {
	res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
}

exports.getAuthenticationToken = async function(req, res, next){
	let token = null;
	const body = {
		client_id: clientId,
		client_secret: clientSecretId,
		code: req.query.code
	};

	const opts = {
		headers: {
			accept: 'application/json'
		}
	};

	axios.post(`https://github.com/login/oauth/access_token`, body, opts).
	then((response) => {
		const accessToken = response.data.access_token
		return res.json({token: accessToken})
	})
}