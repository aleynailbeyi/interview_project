/* eslint-disable max-len */
import db from '../../src/models';

class answerService {

	static async createAnswer(req){
		try {
			const result = await db.sequelize.transaction(async (t) => {
				const { interview_id, surveyID, text} = req.body;
				
				const answers = {
					interview_id,
					surveyID,
					text
				};
				const answer = await db.Answers.create(answers, {
					include: [
						{
							model: db.Surveys,
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
						}
					]
				}, { transaction: t });
				if (!answer) {
					return {
						type: false,
						message: 'Error! Answer could not be created.'
					};
				}
			});
			return { data: result, type: true, message: 'Answer created.'};

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getAnswerById(){
		try {
			const answers = await db.Answers.findAll({
				where: {
					is_removed: false
				},
				include: [
					{
						model: db.Surveys,
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
					}
				]
			});
			if (!answers) {
				return { type: false, message: 'Answer could not be get.' };
			}
			return {
				type: true,
				data: answers,
				message: 'Answer get by id'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

	static async deleteAnswer(req) {
		try {	
			const deleted = await db.Answers.update(
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
				return ({ type: false, message: 'answer not deleted' });
			}
			return ({ type: true, message: 'answer deleted' });
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default answerService;