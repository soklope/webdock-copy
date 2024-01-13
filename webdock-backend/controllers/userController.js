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
	const { theme } = req.body;
	console.log(user_id);
	console.log(theme);
	try {
		// Find the settings_id for the "theme" setting
		const themeSetting = await db.Settings.findOne({
			where: { name: "theme" },
		});
		console.log(themeSetting.id);
		if (!themeSetting) {
			return res.status(404).json({ error: "Theme setting not found" });
		}

		// Update the userHasSetting value with the new theme value
		const [updatedRowsCount] = await db.userHasSettings.update(
			{ value: theme },
			{ where: 
        { 
          user_id: user_id, 
          settings_id: themeSetting.id
         }}
		);

		if (updatedRowsCount === 0) {
			return res.status(404).json({ error: "User setting not found" });
		}

		return res.status(200).json({ message: "Theme updated successfully", theme });
	} catch (error) {
		console.error("Error updating user settings:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	getUserSettings,
	updateUserSettings,
};
