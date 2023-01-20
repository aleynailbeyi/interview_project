import db from '../../src/models';
import fs from 'fs';
import path from 'path';

class interviewService {

	static async createInterview(req){
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
				return { type: false, message: 'Interview not be created' };
			}
			return { data: interview,
				message: 'Interview created.',
				type: true };

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async downloadPDF(req) {
		try {
			const interviewID = req.params.id;
			const result = await db.Files.findOne({
				where: {
					interviewID: interviewID
				},
				attributes: [ 'path' ]
			});
			const file_path = path.join(__dirname, '../../..' ) + path.sep + result.path;
			if (!fs) {
				return { type: false, message: 'Path did not found' };
			}
			return { type: true, data: file_path };
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
				},
			
				{ 
					model: db.Answers
				}
				
			]});
			if (!getInterview) {
				return { type: false, message: 'Interviews not listed'};
			}
			return {
				type: true, data: getInterview, message: 'Interviews listed'
			};
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getInterviewById(req){
		try {
			const interviewID = await db.Interviews.findAll({
				where: {
					id: req.params.id,
					is_removed: false
				},
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
					},
					{ 
						model: db.Answers
					}
				]
			});
			if (!interviewID)
				return ({ type: false, message: 'Not found interview this id.' });
			else
				return { type: true, data: interviewID, message: 'Interview found successfully.' };  
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async completeInterview(req) {
		try {
			const completed = await db.Interviews.update({
				status_id: 2
			},
			{
				where: {
					id: req.params.id,
					is_removed: false 
				}
			});
			if (!completed) {
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