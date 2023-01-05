'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Interviews extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Interviews.belongsTo(models.InterviewTypes, { foreignKey: 'interview_type'});
			models.Interviews.belongsTo(models.Teams, { foreignKey: 'team_id'});
			models.Interviews.belongsTo(models.InterviewStatuses, { foreignKey: 'status_id'});
			models.Interviews.belongsTo(models.Files, { foreignKey: 'send_file'});
		}
	
	}
	Interviews.init({
		applicant_name: DataTypes.STRING,
		location: DataTypes.STRING,
		note: DataTypes.STRING,
		interview_type: DataTypes.INTEGER,
		team_id: DataTypes.INTEGER,
		status_id: DataTypes.INTEGER,
		dateAt: DataTypes.DATE,
		is_removed: DataTypes.BOOLEAN,
		send_file: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Interviews'
	});
	return Interviews;
};