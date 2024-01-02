'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Reply.belongsTo(models.Comment, { foreignKey: 'id' });
      Reply.belongsTo(models.Comment, { foreignKey: 'comment_id' });
      Reply.belongsTo(models.User, { foreignKey: 'user_id' });
      // define association here
    }
  }
  Reply.init({
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    like_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};