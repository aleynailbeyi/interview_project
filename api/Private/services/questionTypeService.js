import db from '../../src/models';

class questionTypeService {

	static async getQuestionType (){
		try {
			const getQuestionType = await db.QuestionTypes.findAll();
			if (!getQuestionType) {
				return { type: false, message: 'Error. Question type not get all.' };
			}
			return {
				type: true,
				data: getQuestionType,
				message: 'Successfully. Question type get'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default questionTypeService;