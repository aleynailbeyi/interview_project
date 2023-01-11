/**
 * @typedef createTeam
 * @property  {string} team_name - user's first name.
 * @property  {string} team_manager - user's last name.
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import teamService from '../services/teamService';
import Team from '../validation/teamValidation';

class teamController{

	/**
	 * @route POST /private/v1/team/createTeam - Create Team
	 * @group Team 
	 * @param {createTeam.model} createTeam.body.required
	 * @returns {Error.model}  error
	 * @returns {createTeam.model} 200
	 * @security JWT
	 */
	static async createTeam(req, res){
		try {
			const validated_team = await Team.validateCreateTeam(req.body);
			if (!validated_team) {
				return { type: false, message: validated_team.message };
			}
			else {
				const result = await teamService.createTeam(req);
				return res.json(result);
			}
			
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	
	}

	/**
	 * @route GET /private/v1/team/getTeam - Get Team
	 * @group Team 
	 * @returns {Error.model}  error
	 * @returns {createTeam.model} 200
	 * @security JWT
	 */

	static async getTeam(req, res){
		const result = await teamService.getTeam(req);
		return res.json(result);
	}

	/**
	 * @route DELETE /private/v1/team/deleteTeam/{id} - delete Team
	 * @group Team 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {createTeam.model} 200
	 * @security JWT
	 */
	static async deleteTeam(req, res){
		try {
			const result = await teamService.deleteTeam(req);
			return res.json(result);
 		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
module.exports= teamController;