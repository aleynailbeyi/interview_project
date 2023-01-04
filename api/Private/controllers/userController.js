import userService from '../services/userService';

class userController{

	static async createUser(req, res){
		const result = await userService.createUser(req);
		return res.json(result);
	}

}
export default userController;