import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization;
		const decoded = jwt.verify(token, 'wrong-secret');
		req.decoded = decoded;
		next();
	}
	catch (error) {
		console.log(error);
		return res.status(400).send({
			message: 'no token'
		});
	}
};