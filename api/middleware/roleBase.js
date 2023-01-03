import db from '../src/models';

class roleBaseFunction {

	static roleBase() {
		return async (req, res, next, permissionId) => {
			try {
				console.log('decoded', req.decoded);
				const user = await db.Users.findOne({
					where: {
						id: req.decoded.userId
					},
					include: {
						model: db.Roles,
						include: {
							model: db.Permissions,
							where: {
								id: permissionId
							},
							through: {
								attributes: []
							}
						},
						through: {
							attributes: []
						} 
					}
				});
				console.log(JSON.parse(JSON.stringify(user)));
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