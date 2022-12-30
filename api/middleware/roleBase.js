import db from '../src/models';

exports.roleBase = function (userId, permissionId) {
	return async function (req, res, next) {
		try {
			const user = await db.UserRoles.findOne({
				where: {
					id: userId
				},
				include: {
					model: db.Roles,
					required: true,
					through: {
						attributes: []
					},
					include: {
						model: db.Permissions,
						where: {
							id: permissionId
						},
						required: true,
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

};