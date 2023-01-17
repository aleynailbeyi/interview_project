/* eslint-disable max-len */
import db from '../../src/models';

class newInterviewService {

	static async createNewInterview(req){
		try {
			
			const { int_id, int_req} = req.body;
			console.log('req.body', req.body);
			const news = {
				int_id,
				int_req
			};
			const new_interview = await db.NewInterview.create(news);
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
			const new_interview = await db.NewInterview.findAll({
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
				message: 'New interview get by id'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

	static async deleteNewInterview(req) {
		try {	
			const deleted = await db.NewInterview.update(
				{
					is_removed: true
					
				},
				{
					where: {
						id: req.params.id,
						is_removed: false
					}
				});
			console.log('deleted', deleted);
			if (!deleted[0]) {
				return ({ type: false, message: 'New interview not deleted' });
			}
			return ({ type: true, message: 'New interview deleted' });
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default newInterviewService;