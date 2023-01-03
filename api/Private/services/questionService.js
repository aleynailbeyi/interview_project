import db from '../../src/models';

class questionService {

	static async createQuestion(req){
		try {
			const { user_id, type_id, name_id, text } = req.body;
			const result = await db.sequelize.transaction(async (t) => {
				const body = {
					text,
					type_id,
					name_id,
					user_id
				};
				const questions = await db.Questions.create(body, {
					include: [
						{
							model: db.InterviewTypes
						}, 
						{
							model: db.QuestionTypes
						}
					]
				}, { transaction: t });
				if (!questions) {
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

}
module.exports = questionService;