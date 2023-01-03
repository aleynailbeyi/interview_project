import db from '../../src/models';

class positionService {

	static async createPosition (req){
		try {
			const result = await db.sequelize.transaction(async (t) => {

				const position = await db.Positions.create(req.body, {
					include: {
						model: db.Teams
					}
				}, { transaction: t });
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

}
module.exports = positionService;