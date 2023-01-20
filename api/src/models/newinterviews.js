'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class NewInterviews extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.NewInterviews.belongsTo(models.NewInterviewStatuses, { foreignKey: 'status_id'});
			models.NewInterviews.belongsTo(models.Interviews, { foreignKey: 'interview_id'});
		}
	
	}
	NewInterviews.init({
		interview_id: DataTypes.INTEGER,
		interview_req: DataTypes.STRING,
		status_id: DataTypes.INTEGER,
		is_removed: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'NewInterviews'
	});
	return NewInterviews;
};