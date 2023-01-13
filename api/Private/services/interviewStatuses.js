import db from '../../src/models';

class InterviewStatusesService {

	static async getInterviewStatuses (){
		try {
			const getInterviewStatuses = await db.InterviewStatuses.findAll();
			if (!getInterviewStatuses) {
				return { type: false, message: 'Error. Interview status not get all.' };
			}
			return {
				type: true,
				data: getInterviewStatuses,
				message: 'Successfully. Interview statuses get'
			};
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default InterviewStatusesService;