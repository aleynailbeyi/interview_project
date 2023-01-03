'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Users.belongsToMany(models.Roles, {
				through: models.UserRoles,
				foreignKey: 'userId',
				otherKey: 'roleId'
			});
			models.Users.hasMany(models.Questions, {
				foreignKey: 'user_id'
			});
		}
	
	}
	Users.init({
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Users'
	});
	return Users;
};