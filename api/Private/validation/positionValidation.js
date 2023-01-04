import Joi from 'joi';

class position {

	static async validateCreate (body) {
		const positionSchema = Joi.object({
			position_name: Joi.string()
				.required(),
			team_id: Joi.number()
				.integer()
				.required()
		});
		const result = positionSchema.validate(body);
		if (result.error) {
			return {  type: false, message: result.error.details[0].message };
		}
		return true;
	}

}
export default position;
