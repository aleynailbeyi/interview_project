import positionService from '../services/positionService';

class positionController{

	static async createPosition(req, res){
		const result = await positionService.createPosition(req);
		return res.json(result);
	}

}
module.exports= positionController;