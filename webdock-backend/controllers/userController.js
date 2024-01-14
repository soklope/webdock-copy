const db = require("../models");

const getUserSettings = async (req, res) => {
	const user_id = req.params.userId;
	console.log("userID is:", user_id);
	try {
		const userSettings = await db.userHasSettings.findAll({
			where: { user_id: user_id },
			include: [
				{
					model: db.Settings,
				},
			],
		});

		if (!userSettings) {
			return res.status(404).json({ error: "User settings not found" });
		}

		// formatting settings to make it easier to grab the info from the frontend. however scope is already defined on model, so its just QOL
		const formattedSettings = userSettings.map((userSetting) => ({
			setting: userSetting.Setting.name,
			value: userSetting.value,
		}));
		res.json(formattedSettings);
	} catch (error) {
		console.error("Error fetching user settings:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

const updateUserSettings = async (req, res) => {
  const user_id = req.params.userId;
  const { settingName, value } = req.body;
  
  try {
    // Find the settings_id for the specified setting
    const setting = await db.Settings.findOne({
      where: { name: settingName },
    });
    
    if (!setting) {
      return res.status(404).json({ error: `Setting "${settingName}" not found` });
    }
    
    // Update the userHasSetting value with the new setting value
    const [updatedRowsCount] = await db.userHasSettings.update(
      { value: value },
      { where: { user_id, settings_id: setting.id } }
      );

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'No rows to update' });
    }

    return res.status(200).json({ message: `${settingName} updated successfully` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
	getUserSettings,
	updateUserSettings,
};
