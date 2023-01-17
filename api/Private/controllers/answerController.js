import answerService from '../services/answerService';

class answerController {

	static async createAnswer(req, res){
		try {
			const result = await answerService.createAnswer(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

	static async getAnswerById(req, res){
		try {
			const result = await answerService.getAnswerById(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

}
export default answerController;