"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Settings extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Settings.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Settings",
			defaultScope: {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'user_id'],
        },
        order: [["id", "ASC"]], //default is ascending, but is more readble with this line
      },
		}
	);
	return Settings;
};