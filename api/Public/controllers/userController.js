 import userService from '../services/userService';
 import 'http';
 
 class authController {
 
	 static async userRegister(req, res) {
		const result = await userService.register(req.body);
		return res.json(result);
	 }
	
	 static async userLogin(req, res) {
		const result = await userService.login(req.body);
		if (result.type) {
			 req.headers.authorization = result.data.token;
		}
		return res.json(result);
	 }
 
 }
 export default authController;