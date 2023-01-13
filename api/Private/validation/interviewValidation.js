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
		return { type: true };
	}

}
export default interview;
