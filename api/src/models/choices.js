'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Choices extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate() {
			
		}
	
	}
	Choices.init({
		questionId: DataTypes.INTEGER,
		name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Choices'
	});
	return Choices;
};