/**
 * @typedef getInterviewStatuses
 * @property  {string} name - interview type name.
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import InterviewStatusesService from '../services/interviewStatuses';
 
class interviewStatusesController{
  
	  /**
	   * @route GET /private/v1/interviewStatuses/getInterviewStatuses - Get Interview Statuses
	   * @group getInterviewStatuses 
	   * @returns {Error.model}  error
	   * @returns {getInterviewStatuses.model} 200
	   * @security JWT
	   */
  
	  static async getInterviewStatuses(req, res){
		  const result = await InterviewStatusesService.getInterviewStatuses(req);
		  return res.json(result);
	  }
  
}
module.exports= interviewStatusesController;