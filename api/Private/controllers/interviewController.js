
/**
 * @typedef CreateInterview
 * @consumes multipart/form-data
 * @property {string} applicant_name.required
 * @property {string} note.required
 * @property {integer} interview_type.required
 * @property {integer}team_id.required
 * @property {integer} status_id.required
 * @property {string} dateAt.required
 * @property {integer} location_id.required
 * @property {integer} surveyId.required
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */
import interviewService from '../services/interviewService';
import interview from '../validation/interviewValidation';

class interviewController{

	/**
	 * @route POST /private/v1/interview/createInterview - Create Interview
	 * @group Interview 
	 * @param {file} files.data.required
	 * @param {CreateInterview.model} CreateInterview.body.required
	 * @returns {Error.model}  error
	 * @returns {CreateInterview.model} 200
	 * @security JWT
	 */
	static async createInterview(req, res){
		try {
			const validated_interview = await interview.validateCreateInterview(req.body);
			if (!validated_interview.type) {
				res.json({type: false, message: validated_interview.message});
			}
			else {
				const result = await interviewService.createInterview(req.body);

				if (result.type) res.json({type: true, message: result.message});
				else res.json({type: false, message: result.message});
			}
			
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}
	/**
	 * @route GET /private/v1/interview/getAllInterview - Get Interview
	 * @group Interview 
	 * @returns {Error.model}  error
	 * @returns {CreateInterview.model} 200
	 * @security JWT
	 */
	static async getAllInterview(req, res){
		const result = await interviewService.getAllInterview(req);
		return res.json(result);
	}
	static async completeInterview(req, res){
		try {
			const validated_complete = await interview.validateCompleteInterview(req.body);
			if (!validated_complete.type) {
				res.json({type: false, message: validated_complete.message});
			}
			else {
				const result = await interviewService.completeInterview(req);

				if (result.type) res.json({type: true, message: result.message});
				else res.json({type: false, message: result.message});
			}
			
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

	/**
	 * @route GET /private/v1/interview/getInterviewById/{id} - Interview Detail
	 * @group Interview 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {CreateInterview.model} 200
	 * @security JWT
	 */
	static async getInterviewById(req, res){
		const result = await interviewService.getInterviewById(req);
		return res.json(result);
	}

	/**
	 * @route DELETE /private/v1/interview/deleteInterview/{id} - Delete Interview
	 * @group Interview 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {CreateInterview.model} 200
	 * @security JWT
	 */

	static async deleteInterview(req, res) {
		try {
			const result = await interviewService.deleteInterview(req);
			return res.json(result);
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

}
export default interviewController;