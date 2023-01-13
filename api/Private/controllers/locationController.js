/**
 * @typedef Location
 * @property  {string} name - Location name.
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import LocationService from '../services/locationService';
 
class LocationController{
  
	  /**
	   * @route GET /private/v1/location/getLocation - Get Locations
	   * @group Location 
	   * @returns {Error.model}  error
	   * @returns {Location.model} 200
	   * @security JWT
	   */
  
	  static async getLocation(req, res){
		  const result = await LocationService.getLocation(req);
		  return res.json(result);
	  }
  
}
module.exports= LocationController;