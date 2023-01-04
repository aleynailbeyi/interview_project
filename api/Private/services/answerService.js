import db from '../../src/models';

class answerService {

	static async createAnswer(req){
		try {
			const { interview_id, question_id, choice_id } = req.body;
			const result = await db.sequelize.transaction(async (t) => {
				const body = {
					interview_id,
					question_id,
					choice_id
				};
				const answers = await db.Answers.create(body, {
					include: [
						{
							model: db.Interviews
						}, 
						{
							model: db.Questions
						},
						{
							model: db.Choices
						}
					]
				}, { transaction: t });
				if (!answers) {
					return {
						type: false,
						message: 'Hata! Cevaplar oluşturulamadı.'
					};
				}
			});
			return { data: result, type: true, message: 'Cevaplarınız oluşturuldu.'};
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default answerService;