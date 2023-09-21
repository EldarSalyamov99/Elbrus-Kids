'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category, Statistic, Answer}) {
      // define association here
      this.belongsTo(Category, {
        foreignKey: 'catId'
      })
      this.hasMany(Statistic, {
        foreignKey: 'qId'
      })
      this.hasMany(Answer, {
        foreignKey: 'qId'
      })
    }
  }
  Question.init({
    questions: DataTypes.TEXT,
    catId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};