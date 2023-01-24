import db from '../../src/models';

class surveyService {

	static async createSurvey(req){
		try {
			const result = await db.sequelize.transaction(async (t) => {
				
				const survey = await db.Surveys.create(req, {
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
						message: 'Error! Surveys could not be created.'
					};
				}
			});
			return { data: result, type: true, message: 'Surveys created.'};

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
				return { type: false, message: 'Surveys could not be get.' };
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

	static async getSurveyById(req){
		try {
			const survey = await db.Surveys.findOne({
				where: {
					id: req.params.id,
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
			if (!survey) {
				return { type: false, message: 'Surveys could not be get.' };
			}
			return {
				type: true,
				data: survey,
				message: 'Surveys get by id'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

	static async deleteSurvey(req) {
		try {	
			const deleted = await db.Surveys.update(
				{
					is_removed: true
					
				},
				{
					where: {
						id: req.params.id,
						is_removed: false
					}
				});

			if (!deleted[0]) {
				return ({ type: false, message: 'survey not deleted' });
			}
			return ({ type: true, message: 'survey deleted' });
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default surveyService;