'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class NewInterview extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.NewInterview.belongsTo(models.Interviews, { foreignKey: 'int_id'});
		}
	
	}
	NewInterview.init({
		int_id: DataTypes.INTEGER,
		int_req: DataTypes.STRING,
		is_removed: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'NewInterview'
	});
	return NewInterview;
};