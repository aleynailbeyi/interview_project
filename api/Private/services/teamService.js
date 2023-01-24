import db from '../../src/models';

class teamService {

	static async createTeam (req){
		try {
			const team = await db.Teams.create(req.body);
			if (!team) {
				return {
					type: false,
					message: 'Error! Team not created.'
				};
			}
			
			return { data: team, type: true, message: 'Successfully. Team created.'};

		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getTeam (){
		try {
			const getTeam = await db.Teams.findAll({
				where: {
					is_removed: false
				}
			});
			if (!getTeam) {
				return { type: false, message: 'Error. Teams not get all.' };
			}
			return {
				type: true,
				data: getTeam,
				message: 'Successfully. Team get'
			};
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async deleteTeam (req){
		try {	
			const deleted = await db.Teams.update(
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
				return ({ type: false, message: 'Team not deleted' });
			}
			return ({ type: true, message: 'Team deleted' });
		} 
		catch (error) {
			return { type: false, message: error.message };
		}
	}

}
export default teamService;