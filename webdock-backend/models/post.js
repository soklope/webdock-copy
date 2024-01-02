"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Status, {
        foreignKey: "status_id",
      });

      Post.belongsTo(models.Category, {
        foreignKey: "category_id",
      });

      Post.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      Post.hasMany(models.Comment, {
        foreignKey: "post_id",
      });
      // Post.belongsToMany(models.User, {
      //   through: 'PostHasUpvote',
      //   foreignKey: 'post_id'
      // });
      // define association here
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      upvotes: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      comment_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      upvotes_id: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
