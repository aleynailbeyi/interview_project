import Joi from 'joi';

class Auth {

	static async validateRegister (body) {
		const registerSchema = Joi.object({
			firstName: Joi.string()
				.min(2)
				.max(30)
				.required(),
			lastName: Joi.string()
				.min(2)
				.max(30)
				.required(),
			email: Joi.string()
				.email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } })
				.required(),
			password: Joi.string()
				.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
				.required()
		});
		const result = registerSchema.validate(body);
		console.log('result', result);
		if (result.error) {
			return { message: result.error.details[0].message, type: false };
		}
		return true;
	}
	static async validateLogin (body) {
		const loginSchema = Joi.object({
			email: Joi.string()
				.email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } })
				.required(),
			password: Joi.string()
				.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
				.required()
		});
		const result = loginSchema.validate(body);
		if (result.error) {
			return { message: result.error.details[0].message, type: false };
		}
		return true;
	}

}
export default Auth;