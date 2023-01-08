import db from '../../src/models';

class interviewService {

	static async createInterview(req){
		try {
			// eslint-disable-next-line max-len
			const { applicant_name, location_id, note, interview_type, team_id, status_id, dateAt, surveyId} = JSON.parse(req.body.data);
			
			const files = req.files;

			const fileArr = [];

			files.map(item => {
				fileArr.push({
					file_name: item.filename
				});
			});
			console.log('fileArr', files);
			const result = await db.sequelize.transaction(async (t) => {
				const interview = {
					applicant_name,
					location_id,
					note,
					interview_type,
					team_id,
					status_id,
					dateAt,
					Files: fileArr,
					surveyId
				};
				const new_interview = await db.Interviews.create(interview, {
					include: [
						{
							model: db.Files
							
						},
						{
							model: db.Surveys
						}
					]
				}, { transaction: t });
			
				if (!new_interview) {
					return { type: false, message: 'Interview isnt create' };
				}
			});
			return { data: result,
				message: 'Interview created.',
				type: true };

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getAllInterview(){
		try {
			const getInterview = await db.Interviews.findAll({ where: {
				is_removed: false
			},
			include: [
				{
					model: db.Files
					
				},
				{
					model: db.Surveys
				}
			]});
			if (!getInterview) {
				return { type: false, message: 'Mülakatlar listelenemedi'};
			}
			return {
				type: true, data: getInterview, message: 'Mülakatlar listelendi'
			};
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getInterviewById(req){
		try {
			const interviewID = await db.Interviews.findOne({
				where: {
					id: req.params.id,
					is_removed: false
				}
			});
			if (!interviewID)
				return ({ type: false, message: 'Bu id de mülakat bulunamadı.' });
			else
				return { type: true, data: interviewID, message: 'Mülakat bulundu' };  
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async completeInterview(req) {
		try {
			const interview = await db.Interviews.update({
				status_id: req.body.status_id
			},
			{
				where: {
					id: req.body.id
				}
			});
			if (!interview) {
				return { type: false, message: 'Mülakat tamamlanamadı' };
			}
			return { type: true, message: 'Mülakat tamamlandı' };
		} 
		catch (error) {
			return {type: false, message: error.message};
		}
	}
	static async deleteInterview(req){
		try {
			const deleted = await db.Interviews.update({
				is_removed: true,
				status_id: 3
			}, {
				where: {
					id: req.params.id,
					is_removed: false
				}
			});
			if (deleted[0])
				return ({ type: true, message: 'Interview is deleted' });
			else
				return ({ type: false, message: 'Interview didnt found' });

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default interviewService;