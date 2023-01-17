import newInterviewService from '../services/newInterviewService';

class newInterviewController {

	static async createNewInterview(req, res){
		try {
			const result = await newInterviewService.createNewInterview(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

	static async getNewInterview(req, res){
		try {
			const result = await newInterviewService.getNewInterview(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

	static async deleteNewInterview(req, res){
		try {
			const result = await newInterviewService.deleteNewInterview(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

}
export default newInterviewController;