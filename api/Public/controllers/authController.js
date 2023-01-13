/**
 * @typedef UserRoles
 * @property {integer} roleId.required
 */
/**
 * @typedef userRegister
 * @property  {string} firstName.required - user's first name.
 * @property  {string} lastName.required - user's last name.
 * @property  {string} email.required - user's email.
 * @property  {string} password.required - user's password.
 */

/**
 * @typedef userLogin
 * @property  {string} email.required - user's email.
 * @property  {string} password.required - user's password.
 */

/**
 * @typedef Token
 * @property {string} token
 */

/**
 * @typedef Response
 * @property {boolean} type
 * @property {string} message
 * @property {Token.model} data
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import authService from '../services/authService';
import Auth from '../validation/authValidation';
 
class authController {
	
	/**
	 * @route POST /public/v1/auth/register - User register
	 * @group Auth 
	 * @param {userRegister.model} userRegister.body.required
	 * @returns {Error.model}  error
	 * @returns {userRegister.model} 200
	 */
	 static async userRegister(req, res) {
		try {
			const validated_register = await Auth.validateRegister(req);
			if (validated_register.type) {
				res.json({type: false, message: validated_register.message});
			}
			const result = await authService.register(req.body);

			if (result.type) res.json({type: true, message: result.message});
			else res.json({type: false, message: result.message});
			
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	 }
	
	 /**
	  * @route POST /public/v1/auth/login - User login
	  * @group Auth 
	  * @param {userLogin.model} userLogin.body.required
	  * @returns {Error.model}  error
	  * @returns {Response.model} 200
	  */
	 static async userLogin(req, res) {
		try {
			const validated_login = await Auth.validateLogin(req);

			if (validated_login.type) {
				res.json({type: false, message: validated_login.message});
			}
			else {
				const result = await authService.login(req.body);

				if (result.type) res.json(result);
				else res.json({type: false, message: result.message});
			}
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	 }
 
}
export default authController;