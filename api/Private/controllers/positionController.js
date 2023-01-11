/**
 * @typedef Position
 * @property {string} position_name.required
 * @property {integer} team_id.required
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import positionService from '../services/positionService';
import position from '../validation/positionValidation';

class positionController{

	/**
	 * @route POST /private/v1/position/createPosition - Create Position
	 * @group Position 
	 * @param {Position.model} Position.body.required
	 * @returns {Error.model}  error
	 * @returns {Position.model} 200
	 * @security JWT
	 */

	static async createPosition(req, res){
		try {
			const validated_position = await position.validateCreate(req.body);
			if (!validated_position) {
				return { type: false, message: validated_position.message };
			}
			else {
				const result = await positionService.createPosition(req);
				return res.json(result);
			}
			
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

	/**
	 * @route GET /private/v1/position/getPosition - Get Position
	 * @group Position 
	 * @returns {Error.model}  error
	 * @returns {Position.model} 200
	 * @security JWT
	 */
	static async getPosition(req, res){
		const result = await positionService.getPosition(req);
		return res.json(result);
	}

	/**
	 * @route DELETE /private/v1/position/deletePosition/{id} - Delete Position
	 * @group Position 
	 * @param {number} id.path.required
	 * @returns {Error.model}  error
	 * @returns {Position.model} 200
	 * @security JWT
	 */
	static async deletePosition(req, res){
		const result = await positionService.deletePosition(req);
		return res.json(result);
	}

}
module.exports= positionController;