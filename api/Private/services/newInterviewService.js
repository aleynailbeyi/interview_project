/* eslint-disable max-len */
import db from '../../src/models';

class newInterviewService {

	static async createNewInterview(req){
		try {
			
			const new_interview = await db.NewInterviews.create(req.body, {
				status_id: 1
			});
			if (!new_interview) {
				return {
					type: false,
					message: 'Error! New interview could not be created.'
				};
			}
	
			return { data: new_interview, type: true, message: 'New interview created.'};

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getNewInterview(){
		try {
			const new_interview = await db.NewInterviews.findAll({
				where: {
					is_removed: false
				},
				include: [
					{ 
						model: db.Interviews,
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
					}
				
				]
			});
			if (!new_interview) {
				return { type: false, message: 'New interview could not be get.' };
			}
			return {
				type: true,
				data: new_interview,
				message: 'New interview gets'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

	static async confirmNewInterview(req){
		try {
			// eslint-disable-next-line max-len
			const { userID, applicant_name, location_id, note, interview_type, team_id, dateAt, endAt, surveyId} = JSON.parse(req.body.data);
	
			const files = req.files;
				
			const fileArr = [];
	
			files.map(item => {
				fileArr.push({
					file_name: item.filename,
					path: item.path
				});
			});
		
			const interview = {
				userID,
				applicant_name,
				location_id,
				note,
				interview_type,
				team_id,
				dateAt,
				endAt,
				Files: fileArr,
				surveyId
			};
			const new_interview = await db.Interviews.create(interview, {
	
				include: [
					{
						model: db.Files
								
					},
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
				
			if (!new_interview) {
				return { type: false, message: 'New interview not be created' };
			}
			return { data: interview,
				message: 'New interview created.',
				type: true };
	
		}
		catch (error) {
			return { type: false, message: error.message };
		}
		
	}

	static async refuseNewInterview(req) {
		try {	
			const refused = await db.NewInterviews.update(
				{
					status_id: 3
				},
				{
					where: {
						id: req.params.id,
						is_removed: false 
					}
				});
			if (!refused) {
				return ({ type: false, message: 'New interview not refused' });
			}
			return ({ type: true, message: 'New interview refused' });
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default newInterviewService;