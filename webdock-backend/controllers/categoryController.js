const db = require('../models'); // Import your Sequelize instance

const getCategories = (req, res) => {
  db.Category.findAll({
    attributes: ['id', 'category'], // Specify the fields you want to retrieve
  }).then((categories) => {
    // Your response handling logic here
    res.json(categories);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

module.exports = {
  getCategories,
};
