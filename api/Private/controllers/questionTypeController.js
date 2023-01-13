/**
 * @typedef getQuestionType
 * @property  {string} name - interview type name.
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import questionTypeService from '../services/questionTypeService';
 
class questionTypeController{
  
	  /**
	   * @route GET /private/v1/questionType/getQuestionType - Get Question Type
	   * @group getQuestionType 
	   * @returns {Error.model}  error
	   * @returns {getQuestionType.model} 200
	   * @security JWT
	   */
  
	  static async getQuestionType(req, res){
		  const result = await questionTypeService.getQuestionType(req);
		  return res.json(result);
	  }
  
}
module.exports= questionTypeController;