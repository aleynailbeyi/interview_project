import db from '../../src/models';

class positionService {

	static async createPosition (req){
		try {
			const position = await db.Positions.create(req.body);
			if (!position) {
				return {
					type: false,
					message: 'Error! Position not created.'
				};
			}
		
			return { data: position, type: true, message: 'Successfully. Position created.'};

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getPosition () {
		try {
			const getPositionResult = await db.Positions.findAll({
				where: {
					is_removed: false
				}
			});
			if (!getPositionResult) {
				return { type: false, message: 'Positions not get all' };
			}
			return {
				type: true,
				data: getPositionResult,
				message: 'Get positions successfully.'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async deletePosition (req) {
		try {
			const deleted = await db.Positions.update({
				is_removed: true
			}, {
				where: {
					id: req.params.id,
					is_removed: false
				}
			});
			if (deleted[0])
				return ({ type: true, message: 'Position deleted' });
			else
				return ({ type: false, message: 'Position didnt found' });
		} 
		catch (error) {
			return { type: false, message: error.message };	
		}
	}

}
export default positionService;