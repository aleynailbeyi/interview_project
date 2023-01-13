import db from '../src/models';

class roleBaseFunction {

	static roleBase(permissionId) {
		return async (req, res, next) => {
			try {
				console.log('decoded', req.decoded);
				const user = await db.Users.findOne({
					where: {
						id: req.decoded.userId
					},
					include: [
						{
							model: db.Roles,
							required: true,
							through: {
								attributes: []
							},
							include: [
								{
									model: db.Permissions,
									required: true,
									through: {
										attributes: []
									},
									where: {
										id: permissionId
									}
								}
							]
						}
					]
				});
				if (user){
					next();
				}
				else {
					return res.status(401).json('You dont have permission!');
				}
			
			}
			catch (error) {
				throw error;
			}
		};
		
	} 

}
export default roleBaseFunction;