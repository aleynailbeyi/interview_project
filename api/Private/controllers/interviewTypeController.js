/**
 * @typedef getInterviewType
 * @property  {string} name - interview type name.
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import interviewTypeService from '../services/interviewType';
 
class interviewTypeController{
 
	 /**
	  * @route GET /private/v1/interviewType/getInterviewType - Get Interview Type
	  * @group getInterviewType 
	  * @returns {Error.model}  error
	  * @returns {getInterviewType.model} 200
	  * @security JWT
	  */
 
	 static async getInterviewType(req, res){
		 const result = await interviewTypeService.getInterviewType(req);
		 return res.json(result);
	 }
 
}
module.exports= interviewTypeController;