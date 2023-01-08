import Joi from 'joi';

class question {

	static async validateCreateQuestion (body) {
		const questionSchema = Joi.object({
			text: Joi.string()
				.required(),
			type_id: Joi.number()
				.integer()
				.required(),
			survey_id: Joi.number()
				.integer()
				.required()
		});
		const result = questionSchema.validate(body);
		if (result.error) {
			return {  type: false, message: result.error.details[0].message };
		}
		return true;
	}

}
export default question;
