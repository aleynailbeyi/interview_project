import teamService from '../services/teamService';

class teamController{

	static async createTeam(req, res){
		const result = await teamService.createTeam(req);
		return res.json(result);
	}

}
module.exports= teamController;