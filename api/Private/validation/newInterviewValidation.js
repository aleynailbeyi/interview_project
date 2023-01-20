import Joi from 'joi';

class NewInterview {

	static async validateCreateNewInterview (body) {
		const interviewSchema = Joi.object({
			userID: Joi.number()
				.integer()
				.required(),
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
			dateAt: Joi.date()
				.required(),
			endAt: Joi.date()
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
export default NewInterview;
