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
			models.Interviews.hasMany(models.Files, { foreignKey: 'interviewID' });
			models.Interviews.belongsTo(models.Locations, { foreignKey: 'location_id'});
			models.Interviews.belongsTo(models.Surveys, { foreignKey: 'surveyId'});
			models.Interviews.belongsTo(models.Users, { foreignKey: 'userID'});
			models.Interviews.hasMany(models.Answers, { foreignKey: 'interview_id'});
		}
	
	}
	Interviews.init({
		applicant_name: DataTypes.STRING,
		note: DataTypes.STRING,
		interview_type: DataTypes.INTEGER,
		team_id: DataTypes.INTEGER,
		status_id: DataTypes.INTEGER,
		dateAt: DataTypes.DATE,
		endAt: DataTypes.DATE,
		is_removed: DataTypes.BOOLEAN,
		location_id: DataTypes.INTEGER,
		surveyId: DataTypes.INTEGER,
		userID: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Interviews'
	});
	return Interviews;
};