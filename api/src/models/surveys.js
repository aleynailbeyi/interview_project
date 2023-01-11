'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Surveys extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Surveys.hasMany(models.Questions, { foreignKey: 'survey_id' });
			models.Surveys.hasMany(models.Interviews, { foreignKey: 'surveyId' });
		}
	
	}
	Surveys.init({
		name: DataTypes.STRING,
		is_removed: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'Surveys'
	});
	return Surveys;
};