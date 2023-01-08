'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserRoles extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.UserRoles.belongsTo(models.Users, { foreignKey: 'userId' });
		}
	
	}
	UserRoles.init({
		userId: DataTypes.INTEGER,
		roleId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'UserRoles'
	});
	return UserRoles;
};