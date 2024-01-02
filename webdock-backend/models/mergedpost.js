'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MergedPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MergedPost.belongsTo(models.Post, {
        foreignKey: 'master_post',
      });

      MergedPost.belongsTo(models.Post, {
        foreignKey: 'child_post',
      });
    }
  }
  MergedPost.init({
    master_post: DataTypes.INTEGER,
    child_post: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MergedPost',
  });
  return MergedPost;
};