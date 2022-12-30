import db from '../../src/models';

class interviewService {
	static async createInterview(req){
		try {
			const { applicant_name, location, note, interview_type, team_id, status_id, dateAt} = req.body;
			const result = await db.sequelize.transaction(async (t) => {
			const dbinterview = await db.UserRoles.findOne({
				where: {
					roleId: 1
				}
			}, { transaction: t });
			if (!dbinterview) {
				return { type: false, message: 'Yetkiniz yok' };
			}
			const interview = {
				applicant_name,
				location,
				note,
				interview_type,
				team_id,
				status_id,
				dateAt
			};
			const new_interview = await db.Interviews.create(interview, {
				include: {
					model: db.Teams,
					model: db.InterviewTypes,
					model: db.InterviewStatus
				}
			}, {transaction: t})
			if (!new_interview) {
				return { type: false, message: 'Kayıt gerçekleştirilemedi.' }
			}
		});
			return { data: result,
				message: 'Mülakat oluşturuldu.',
				type: true };
			

		} catch (error) {
			return { type: false, message: error.message };
		}
	}
}
module.exports = interviewService;