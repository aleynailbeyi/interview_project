import answerService from '../services/answerService';

class answerController{

	static async createAnswer(req, res){
		const result = await answerService.createAnswer(req);
		return res.json(result);
	}

}
export default answerController;