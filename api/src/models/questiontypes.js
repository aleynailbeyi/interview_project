'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class QuestionTypes extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate() {
      
		}
	
	}
	QuestionTypes.init({
		name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'QuestionTypes'
	});
	return QuestionTypes;
};