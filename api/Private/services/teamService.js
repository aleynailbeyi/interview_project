import db from '../../src/models';

class teamService {

	static async createTeam (req){
		try {
			const result = await db.sequelize.transaction(async (t) => {

				const team = await db.Teams.create(req.body, { transaction: t });
				if (!team) {
					return {
						type: false,
						message: 'Hata! Takım oluşturulamadı.'
					};
				}
			});
			return { data: result, type: true, message: 'Takım oluşturuldu.'};

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
module.exports = teamService;