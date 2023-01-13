'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Questions extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Questions.belongsTo(models.QuestionTypes, { foreignKey: 'type_id'});
			models.Questions.belongsTo(models.Surveys, { foreignKey: 'survey_id' });
			models.Questions.hasMany(models.Choices, { foreignKey: 'questionId'});
		}
	
	}
	Questions.init({
		text: DataTypes.STRING,
		type_id: DataTypes.INTEGER,
		is_removed: DataTypes.BOOLEAN,
		survey_id: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Questions'
	});
	return Questions;
};