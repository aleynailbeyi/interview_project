'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Positions extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Positions.belongsTo(models.Teams, { foreignKey: 'team_id'});
		}
	
	}
	Positions.init({
		position_name: DataTypes.STRING,
		team_id: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Positions'
	});
	return Positions;
};