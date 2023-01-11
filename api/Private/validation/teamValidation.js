import Joi from 'joi';

class Team {

	static async validateCreateTeam (body) {
		const teamSchema = Joi.object({
			team_name: Joi.string()
				.required(),
			team_manager: Joi.string()
				.required()
		});
		const result = teamSchema.validate(body);
		if (result.error) {
			return {  type: false, message: result.error.details[0].message };
		}
		return true;
	}

}
export default Team;