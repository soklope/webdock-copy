// controllers/userController.js
const db = require("../models");

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
    console.log("Request Body:", req.body);

    const result = await db.Comment.create({
      content,
      user_id: parseInt(user_id, 10),
      post_id
    });

    // console.log("External API Response:", responseData);
    res.status(201).json({ message: "Data saved successfully", data: result });

  } catch (error) {

    // sequelize error handling:
    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ error: "Validation failed", details: error.errors });
    } else {
      // other errors:
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

const createNewReply = async (req, res) => {
  try {
    const { content, user_id, comment_id } = req.body;
    console.log("Request Body:", req.body);

    const result = await db.Reply.create({
      content,
      user_id: parseInt(user_id, 10),
      comment_id
    });

    // console.log("External API Response:", responseData);
    res.status(201).json({ message: "Data saved successfully", data: result });

  } catch (error) {

    // sequelize error handling:
    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ error: "Validation failed", details: error.errors });
    } else {
      // other errors:
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};


module.exports = {
  createNewReply,
  createNewComment,
  comment,
  getComment
};
