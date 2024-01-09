// controllers/userController.js
const db = require("../models");
const NotificationService = require('../services/notificationCountService')

const getComment = (req, res) => {
  db.Comment.findAll({
    include: [
      {
        model: db.User,
        attributes: ["name", "email"],
      },
      {
        model: db.Post,
        attributes: ["title", "content"],
      },
    ],
  })
    .then((comments) => {
      res.json(comments);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const comment = (req, res) => {
  const commentId = req.params.id;

  db.Comment.findByPk(commentId, {

    include: [
      {
        model: db.User,
        attributes: ["name", "email"],
      },
    ],
  })
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const createNewComment = async (req, res) => {

  try {
    const { content, user_id, post_id } = req.body;

    const postAuthor = await db.Post.findOne({
      where: {
        id: post_id,
      },
    });

    console.log("Request Body:", req.body);

    const result = await db.Comment.create({
      content,
      user_id: parseInt(user_id, 10),
      post_id
    });

    const createdNotification = await db.Notification.create({
      post_fk: post_id,
      target_user_fk: postAuthor.user_id,
      action_user_fk: user_id,
      type_of_notification_fk: 2,
      notification_seen: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await NotificationService.checkAndRemoveOldestNotifications(user_id, 10);

    res.status(201).json({ message: "Data saved successfully", data: result, notification: createdNotification });

  } catch (error) {

    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ error: "Validation failed", details: error.errors });
    } else {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};


module.exports = {
  createNewComment,
  comment,
  getComment
};
