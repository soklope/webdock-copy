// controllers/userController.js
const db = require("../models");

const getUserSettings = async (req, res) => {
  const userId = req.params.userId;
  
  try {
    // Find user settings based on the user ID
    const userSettings = await Settings.findOne({
      where: { userId: userId },
    });

    if (!userSettings) {
      return res.status(404).json({ error: 'User settings not found' });
    }

    res.json(userSettings);
  } catch (error) {
    console.error('Error fetching user settings:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }

};

module.exports = {
  getUserSettings
};
