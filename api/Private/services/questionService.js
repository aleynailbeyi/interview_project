import db from '../../src/models';

class questionService {

	static async createQuestion(req){
		try {
			const result = await db.sequelize.transaction(async (t) => {
				
				const questions = await db.Questions.create(req.body, { transaction: t });
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
	static async getQuestion(){
		try {
			const getQuestionResult = await db.Questions.findAll({
				where: {
					is_removed: false
				}
			});
			if (!getQuestionResult) {
				return { type: false, message: 'Sorular getirilemedi.' };
			}
			return {
				type: true,
				data: getQuestionResult,
				message: 'Sorular getirildi'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async deleteQuestion(req) {
		try {
			const deleted = await db.Questions.update({
				is_removed: true
			}, {
				where: {
					id: req.params.id,
					is_removed: false
				}
			});
			if (deleted[0])
				return ({ type: true, message: 'Question deleted' });
			else 
				return ({ type: false, message: 'Question didnt found' });
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
module.exports = questionService;