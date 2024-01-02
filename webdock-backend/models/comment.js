'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Comment.belongsTo(models.Post, { 
        foreignKey: 'post_id' 
      });

      Comment.belongsTo(models.User, { 
        foreignKey: 'user_id' 
      });
      
      // Comment.belongsTo(models.Reply, { foreignKey: 'id' });
      
      Comment.hasMany(models.Reply, { 
        foreignKey: 'comment_id' 
      });
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    like_id: DataTypes.INTEGER,
    // reply_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
