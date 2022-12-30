import interviewService from '../services/interviewService';

class interviewController{
	static async createInterview(req, res){
		const result = await interviewService.createInterview(req);
		return res.json(result);
	}
}
module.exports= interviewController;