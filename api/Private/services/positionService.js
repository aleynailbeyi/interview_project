import db from '../../src/models';

class positionService {

	static async createPosition (req){
		try {
			const result = await db.sequelize.transaction(async (t) => {

				const position = await db.Positions.create(req.body, { transaction: t });
				if (!position) {
					return {
						type: false,
						message: 'Hata! Pozisyon oluşturulamadı.'
					};
				}
			});
			return { data: result, type: true, message: 'Pozisyon oluşturuldu.'};

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
				return { type: false, message: 'Pozisyonlar getirilemedi' };
			}
			return {
				type: true,
				data: getPositionResult,
				message: 'Pozisyonlar getirildi'
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
module.exports = positionService;