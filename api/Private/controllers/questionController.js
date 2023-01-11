/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */
/**
 * @typedef Questions
 * @property {string} text.required
 * @property {integer} type_id.required
 * @property  {Array .<Choices>} Choices.required 
 */

/**
 * @typedef Choices
 * @property {string} name.required
 */

import questionService from '../services/questionService';

class questionController{
	
	/**
	 * @route GET /private/v1/question/getQuestion - Get Question
	 * @group Question 
	 * @returns {Error.model}  error
	 * @returns {Questions.model} 200
	 * @security JWT
	 */

	static async getQuestion(req, res){
		const result = await questionService.getQuestion(req);
		return res.json(result);
	}
	/**
	 * @route DELETE /private/v1/question/deleteQuestion/{id} - Delete Question
	 * @group Question 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {Questions.model} 200
	 * @security JWT
	 */
	static async deleteQuestion(req, res){
		try {
			const result = await questionService.deleteQuestion(req);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
module.exports= questionController;