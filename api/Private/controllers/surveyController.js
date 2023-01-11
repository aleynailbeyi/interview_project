/**
 * @typedef Choices
 * @property {string} name.required
 */

/**
 * @typedef Questions
 * @property {string} text.required
 * @property {integer} type_id.required
 * @property  {Array .<Choices>} Choices.required 
 */

/**
 * @typedef Survey
 * @property  {string} name.required - survey name.
 * @property  {Array .<Questions>} Questions.required 
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import surveyService from '../services/surveyService';
import Survey from '../validation/surveyValidation';

class SurveyController{

	/**
	 * @route POST /private/v1/survey/createSurvey - Create Survey
	 * @group Survey 
	 * @param {Survey.model} Survey.body.required
	 * @returns {Error.model}  error
	 * @returns {Survey.model} 200
	 * @security JWT
	 */
	static async createSurvey(req, res){
		try {
			const validated_survey = await Survey.validateCreateSurvey(req.body);
			if (!validated_survey) {
				return { type: false, message: validated_survey.message };
			}
			const result = await surveyService.createSurvey(req.body);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

	/**
	 * @route GET /private/v1/survey/getSurveys - Get Survey
	 * @group Survey 
	 * @returns {Error.model}  error
	 * @returns {Survey.model} 200
	 * @security JWT
	 */

	static async getSurveys(req, res){
		try {
			const result = await surveyService.getSurveys(req);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

	/**
	 * @route DELETE /private/v1/survey/deleteSurvey/{id} - Delete Survey
	 * @group Survey 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {Survey.model} 200
	 * @security JWT
	 */
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