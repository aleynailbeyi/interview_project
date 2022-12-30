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
      models.Answers.belongsTo(models.Questions, { foreignKey: 'question_id'});
      models.Answers.belongsTo(models.Choices, { foreignKey: 'choice_id'});
    }
  }
  Answers.init({
    interview_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    choice_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};