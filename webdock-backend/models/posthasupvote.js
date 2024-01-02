'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostHasUpvote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostHasUpvote.belongsTo(models.Post, {
        foreignKey: 'post_id'
      }),
        PostHasUpvote.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
    }

  }
  PostHasUpvote.init({
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostHasUpvote',
  });
  return PostHasUpvote;
};