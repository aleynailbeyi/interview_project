import Joi from 'joi';

class Survey {

	static async validateCreateSurvey (body) {
		const surveySchema = Joi.object({
			name: Joi.string()
				.required(),
			Questions: [ {
				text: Joi.string()
					.required(),
				type_id: Joi.number()
			    .integer()
					.required(),
				Choices: [ {
					name: Joi.string()
						.required()
				} ]
			} ]
		});
		const result = surveySchema.validate(body);
		if (result.error) {
			return {  type: false, message: result.error.details[0].message };
		}
		return true;
	}

}
export default Survey;
