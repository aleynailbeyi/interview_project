'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Files extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Files.belongsTo(models.Interviews, { foreignKey: 'interviewID'});
		}
	
	}
	Files.init({
		file_name: DataTypes.STRING,
		interviewID: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Files'
	});
	return Files;
};