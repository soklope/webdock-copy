'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.belongsTo(models.Type_of_notification, {
        foreignKey: "type_of_notification_fk",
        targetKey: "id",
      });
    }
  }
  Notification.init({
    post_fk: DataTypes.INTEGER,
    target_user_fk: DataTypes.INTEGER,
    action_user_fk: DataTypes.INTEGER,
    type_of_notification_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};