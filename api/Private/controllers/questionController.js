import questionService from '../services/questionService';
import question from '../validation/questionValidation';

class questionController{

	static async createQuestion(req, res){
		try {
			const validated_question = await question.validateCreateQuestion(req.body);
			if (!validated_question) {
				return { type: false, message: validated_question.message };
			}
			const result = await questionService.createQuestion(req);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	static async getQuestion(req, res){
		const result = await questionService.getQuestion(req);
		return res.json(result);
	}
	static async deleteQuestion(req, res){
		const result = await questionService.deleteQuestion(req);
		return res.json(result);
	}

}
module.exports= questionController;