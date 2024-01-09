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

const userGotNewNotification = async (req, res) => {
  const userId = req.params.userId;

  try {
    const notifications = await db.Notification.findAll({
      where: { target_user_fk: userId },
      include: [
        {
          model: db.Type_of_notification,
          attributes: ["notification_type"]
        },

        {
          model: db.User,
          attributes: ["name", "email"]
        },

        {
          model: db.Post,
          attributes: ["title"]
        }
      ]
    });

    res.json(notifications);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};


// const notification = async (req, res) => {
//   const notificationId = req.params.notificationId;

//   try {
//     const notifications = await db.Notification.findAll({
//       where: { id: notificationId },
//     });

//     res.json(notifications);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// };

const notification = async (req, res) => {
  const notificationId = req.params.notificationId;

  try {
    const [updatedRowsCount] = await db.Notification.update(
      { notification_seen: true },
      {
        where: { id: notificationId },
        returning: true, // Include the updated rows in the result
      }
    );

    if (updatedRowsCount > 0) {
      // The update was successful
      res.sendStatus(204); // No Content
    } else {
      res.sendStatus(404); // Not Found
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};


module.exports = {
  getUserWithRole,
  postUser,
  userGotNewNotification,
  notification
};
