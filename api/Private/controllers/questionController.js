import questionService from '../services/questionService';

class questionController{

	static async createQuestion(req, res){
		const result = await questionService.createQuestion(req);
		return res.json(result);
	}

}
module.exports= questionController;