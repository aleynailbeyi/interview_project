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
      models.Interviews.belongsTo(models.InterviewStatus, { foreignKey: 'status_id'});
    }
  }
  Interviews.init({
    applicant_name: DataTypes.STRING,
    location: DataTypes.STRING,
    note: DataTypes.STRING,
    interview_type: DataTypes.STRING,
    team_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    dateAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Interviews',
  });
  return Interviews;
};