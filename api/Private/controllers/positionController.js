import positionService from '../services/positionService';
import position from '../validation/positionValidation';

class positionController{

	static async createPosition(req, res){
		try {
			const validated_position = await position.validateCreate(req.body);
			if (!validated_position) {
				return { type: false, message: validated_position.message };
			}
			const result = await positionService.createPosition(req);
			return res.json(result);
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	static async getPosition(req, res){
		const result = await positionService.getPosition(req);
		return res.json(result);
	}
	static async deletePosition(req, res){
		const result = await positionService.deletePosition(req);
		return res.json(result);
	}

}
module.exports= positionController;