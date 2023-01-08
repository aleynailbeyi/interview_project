import db from '../../src/models';

class surveyService {

	static async createSurvey(req){
		try {
			const result = await db.sequelize.transaction(async (t) => {
				
				const survey = await db.Surveys.create(req.body, {
					include: [
						{
							model: db.Questions,
							include: [
								{
									model: db.Choices
								}
							]
						}
					]
				}, { transaction: t });
				if (!survey) {
					return {
						type: false,
						message: 'Hata! Sorular oluşturulamadı.'
					};
				}
			});
			return { data: result, type: true, message: 'Sorularınız oluşturuldu.'};

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getSurveys(){
		try {
			const surveys = await db.Surveys.findAll({
				where: {
					is_removed: false
				},
				include: [
					{
						model: db.Questions,
						include: [
							{
								model: db.Choices
							}
						]
					}
				]
			});
			if (!surveys) {
				return { type: false, message: 'Surveys isnt get.' };
			}
			return {
				type: true,
				data: surveys,
				message: 'Surveys get all'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async deleteSurvey(req) {
		try {
			const deleted = await db.Surveys.update({
				is_removed: true
			}, {
				where: {
					id: req.params.id,
					is_removed: false
				}
			});
			if (deleted[0])
				return ({ type: true, message: 'Survey deleted' });
			else 
				return ({ type: false, message: 'Survey didnt found' });
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
module.exports = surveyService;