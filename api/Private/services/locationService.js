import db from '../../src/models';

class LocationService {

	static async getLocation (){
		try {
			const getLocation = await db.Locations.findAll();
			if (!getLocation) {
				return { type: false, message: 'Error. Location not get all.' };
			}
			return {
				type: true,
				data: getLocation,
				message: 'Successfully. Location get'
			};
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default LocationService;