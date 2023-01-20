/**
 * @typedef CreateNewInterview
 * @consumes multipart/form-data
 * @property {integer} userID.required
 * @property {string} applicant_name.required
 * @property {string} note.required
 * @property {integer} interview_type.required
 * @property {integer} team_id.required
 * @property {integer} status_id.required
 * @property {string} dateAt.required
 * @property {integer} location_id.required
 * @property {integer} surveyId.required
 */

/**
 * @typedef New_Interview
 * @property {integer} int_id.required
 * @property {string} int_req.required
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import newInterviewService from '../services/newInterviewService';

class newInterviewController {

	/**
	 * @route POST /private/v1/newInterview/createNewInterview - Create New Interview
	 * @group New Interview
	 * @param {New_Interview.model} int_req.body.required
	 * @returns {Error.model}  error
	 * @returns {New_Interview.model} 200
	 * @security JWT
	 */
	static async createNewInterview(req, res){
		try {
			const result = await newInterviewService.createNewInterview(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	/**
	 * @route GET /private/v1/newInterview/getNewInterview - Get New Interview
	 * @group New Interview 
	 * @returns {Error.model}  error
	 * @returns {CreateNewInterview.model} 200
	 * @security JWT
	 */
	static async getNewInterview(req, res){
		try {
			const result = await newInterviewService.getNewInterview(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	/**
	 * @route POST /private/v1/newInterview/confirmNewInterview - Confirm New Interview
	 * @group New Interview
	 * @param {file} files.formData.required
	 * @param {string} data.formData.required
	 * @returns {CreateNewInterview.model} 200
	 * @security JWT
	 */
	static async confirmNewInterview(req, res){
		try {
			const result = await newInterviewService.confirmNewInterview(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	/**
	 * @route PUT /private/v1/newInterview/refuseNewInterview/{id} - Interview refused
	 * @group New Interview 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {CreateNewInterview.model} 200
	 * @security JWT
	 */
	static async refuseNewInterview(req, res){
		try {
			const result = await newInterviewService.refuseNewInterview(req);
			
			return res.json(result);
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

}
export default newInterviewController;