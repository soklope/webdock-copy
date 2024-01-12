// controllers/userController.js
const db = require('../models'); // Import your Sequelize instance

const getUserWithRole = (req, res) => {
  db.User.findAll({
  }).then((users) => {
    // Your response handling logic here
    res.json(users);
  }).catch((e) => {
    console.log(e)
    res.sendStatus(500)
  })
};


module.exports = {
  getUserWithRole,
};
