'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question, User }) {
      // define association here
      this.belongsTo(Question, {
        foreignKey: 'qId',
      });
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  Statistic.init(
    {
      userId: DataTypes.INTEGER,
      qId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Statistic',
    },
  );
  return Statistic;
};
