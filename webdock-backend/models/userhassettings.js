'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userHasSettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userHasSettings.belongsTo(models.Settings, {
        foreignKey: "settings_id",
      });
    }
  }
  userHasSettings.init({
    user_id: DataTypes.INTEGER,
    settings_id: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userHasSettings',
    defaultScope: {
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt', 'user_id'],
      },
      order: [["id", "ASC"]], //default is ascending, but is more readble with this line
    },
  });
  return userHasSettings;
};