import db from '../../src/models';

class interviewService {

	static async createInterview(req){
		try {
			const { applicant_name, location, note, interview_type, team_id, status_id, dateAt, send_file } = req.body;
			
			const interview = {
				applicant_name,
				location,
				note,
				interview_type,
				team_id,
				status_id,
				dateAt,
				send_file
			};
			const new_interview = await db.Interviews.create(interview, {
				include: [
					{
						model: db.Teams
					},
					{
						model: db.InterviewTypes
					},
					{
						model: db.InterviewStatuses
					}
				]
			});
			
			if (!new_interview) {
				return { type: false, message: 'Kayıt gerçekleştirilemedi.' };
			}
			return { data: new_interview,
				message: 'Mülakat oluşturuldu.',
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
			}});
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
module.exports = interviewService;