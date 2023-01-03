'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class InterviewStatuses extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate() {
			// define association here
		}
	
	}
	InterviewStatuses.init({
		status_name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'InterviewStatuses'
	});
	return InterviewStatuses;
};