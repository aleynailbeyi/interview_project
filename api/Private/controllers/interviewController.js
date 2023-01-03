import interviewService from '../services/interviewService';
import interview from '../validation/interviewValidation';

class interviewController{

	static async createInterview(req, res){
		try {
			const validated_interview = await interview.validateCreateInterview(req.body);
			if (!validated_interview) {
				return { type: false, message: validated_interview.message };
			}
			const result = await interviewService.createInterview(req);
			return res.json(result);
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	static async getAllInterview(req, res){
		const result = await interviewService.getAllInterview(req);
		return res.json(result);
	}
	static async completeInterview(req, res){
		const result = await interviewService.completeInterview(req);
		return res.json(result);
	}
	
	static async deleteInterview(req, res) {
		try {
			const result = await interviewService.deleteInterview(req);
			return res.json(result);

		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

}
export default interviewController;