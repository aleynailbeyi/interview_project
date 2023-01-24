/**
 * @typedef Answer
 * @property {string} text.required
 * @property {integer} interview_id.required
 * @property {integer} surveyID.required
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import answerService from '../services/answerService';

class answerController {

	/**
	 * @route POST /private/v1/answer/createAnswer - Create Answer
	 * @group Answer 
	 * @param {Answer.model} Answer.body.required
	 * @returns {Error.model}  error
	 * @returns {Answer.model} 200
	 * @security JWT
	 */

	static async createAnswer(req, res){
		try {
			const result = await answerService.createAnswer(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	/**
	 * @route GET /private/v1/answer/getAnswerById/{id} - Answer Detail
	 * @group Answer 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {Answer.model} 200
	 * @security JWT
	 */
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