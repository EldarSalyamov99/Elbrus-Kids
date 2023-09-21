const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question, Category }) {
      // define association here
      this.hasMany(Question, {
        foreignKey: 'catId',
      });
      this.belongsTo(Category, {
        foreignKey: 'themeId', as: 'theme',
      });
    }
  }
  Category.init({
    catName: DataTypes.STRING,
    themeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
