const db = require("../models");

const getUserSettings = async (req, res) => {
  const user_id = req.params.userId;
  console.log('userID is:' , user_id)
  try {
    const userSettings = await db.userHasSettings.findAll({
      where: { user_id: user_id },
      include: [
        {
          model: db.Settings,
        },
      ]
    });

    if (!userSettings) {
      return res.status(404).json({ error: 'User settings not found' });
    }

    // userSettings.forEach((userSetting) => {
    //   console.log(userSetting.dataValues.Setting.dataValues.name);
    //   console.log(userSetting.dataValues.value);
    // });
    // res.json(userSettings);

    // formatting settings to make it easier to grab the info from the frontend. however scope is already defined on model, so its just QOL
    const formattedSettings = userSettings.map((userSetting) => ({
      setting: userSetting.Setting.name,
      value: userSetting.value,
    }));
    res.json(formattedSettings);

  } catch (error) {
    console.error('Error fetching user settings:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getUserSettings
};
