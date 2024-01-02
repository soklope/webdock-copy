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


const postUser = async (req, res) => {
  // const {avatarURL, email, id, name} = req.body;
  console.log(req.body);
  const result = await db.User.create(req.body);
  res.status(200).json({ message: 'Alt er godt og vi er glade :-)', data: result })
};

module.exports = {
  getUserWithRole,
  postUser
};
