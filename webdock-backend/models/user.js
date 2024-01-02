'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   User.belongsTo(models.Role, {
    //     foreignKey: 'roleId'
    //   })
    //   // define association here
    // User.belongsToMany(models.Post, {
    //   through: 'PostHasUpvote',
    //   foreignKey: 'user_id'
    // });  
  }
    
  }
  User.init({
    // id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    avatarURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};