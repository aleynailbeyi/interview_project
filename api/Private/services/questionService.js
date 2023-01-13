import db from '../../src/models';

class questionService {
	
	static async getQuestion(){
		try {
			const getQuestionResult = await db.Questions.findAll({
				where: {
					is_removed: false
				},
				include: [
					{
						model: db.Surveys
					},
					{
						model: db.Choices
					}
				]
			});
			if (!getQuestionResult) {
				return { type: false, message: 'Questions not get.' };
			}
			return {
				type: true,
				data: getQuestionResult,
				message: 'Questions get.'
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
			console.log('deleted', deleted[0]);
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