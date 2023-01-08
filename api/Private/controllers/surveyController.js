import surveyService from '../services/surveyService';

class SurveyController{

	static async createSurvey(req, res){
		try {
			const result = await surveyService.createSurvey(req);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getSurveys(req, res){
		try {
			const result = await surveyService.getSurveys(req);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async deleteSurvey(req, res){
		try {
			const result = await surveyService.deleteSurvey(req);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	
}
module.exports= SurveyController;