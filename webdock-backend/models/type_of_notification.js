'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_of_notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Type_of_notification.init({
    notification_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type_of_notification',
  });
  return Type_of_notification;
};