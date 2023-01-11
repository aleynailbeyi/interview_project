import Joi from 'joi';

class interview {

	static async validateCreateInterview (body) {
		const interviewSchema = Joi.object({
			applicant_name: Joi.string()
				.required(),
			note: Joi.string()
				.required(),
			interview_type: Joi.number()
			    .integer()
				.required(),
			team_id: Joi.number()
			    .integer()
				.required(),
			status_id: Joi.number()
				.integer()
				.required(),
			dateAt: Joi.date()
				.iso()
				.required(),
			status_id: Joi.number()
				.integer()
				.required(),
			location_id: Joi.number()
				.integer()
				.required(),
			surveyId: Joi.number()
				.integer()
				.required()
		});
		const result = interviewSchema.validate(body);
		if (result.error) {
			return {  type: false, message: result.error.details[0].message };
		}
		return true;
	}
	static async validateCompleteInterview (body) {
		const completeInterviewSchema = Joi.object({
			id: Joi.number()
				.required()
		});
		const result = completeInterviewSchema.validate(body);
		if (result.error) {
			return { message: result.error.details[0].message, type: false };
		}
		return true;
	}

}
export default interview;
