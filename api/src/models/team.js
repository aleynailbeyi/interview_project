'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Teams extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Teams.hasMany(models.Interviews, { foreignKey: 'team_id'});
		}
	
	}
	Teams.init({
		team_name: DataTypes.STRING,
		team_manager: DataTypes.STRING,
		is_removed: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'Teams'
	});
	return Teams;
};