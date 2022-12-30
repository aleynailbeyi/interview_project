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
      models.Questions.belongsTo(models.InterviewTypes, { foreignKey: 'name_id'});
      models.Questions.belongsTo(models.Users, { foreignKey: 'user_id'});
      models.Questions.hasMany(models.QuestionTypes, { foreignKey: 'type_id'});
    }
  }
  Questions.init({
    text: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    name_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};