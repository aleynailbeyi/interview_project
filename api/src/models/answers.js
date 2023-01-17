'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Answers extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Answers.belongsTo(models.Interviews, { foreignKey: 'interview_id'});
		}
	
	}
	Answers.init({
		interview_id: DataTypes.INTEGER,
		text: DataTypes.STRING,
		is_removed: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'Answers'
	});
	return Answers;
};