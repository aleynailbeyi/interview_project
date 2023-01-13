import db from '../../src/models';

class interviewTypeService {

	static async getInterviewType (){
		try {
			const GetInterviewType = await db.InterviewTypes.findAll();
			if (!GetInterviewType) {
				return { type: false, message: 'Error. Interview type not get all.' };
			}
			return {
				type: true,
				data: GetInterviewType,
				message: 'Successfully. Interview type get'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default interviewTypeService;