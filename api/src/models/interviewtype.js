'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class InterviewTypes extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate() {
			// define association here
		}
	
	}
	InterviewTypes.init({
		name: DataTypes.STRING,
		is_removed: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'InterviewTypes'
	});
	return InterviewTypes;
};