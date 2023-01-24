'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class NewInterviewStatuses extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.NewInterviewStatuses.hasMany(models.NewInterviews, { foreignKey: 'status_id'});
		}
	
	}
	NewInterviewStatuses.init({
		status_name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'NewInterviewStatuses'
	});
	return NewInterviewStatuses;
};