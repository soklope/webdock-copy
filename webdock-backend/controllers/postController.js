// controllers/userController.js
const db = require("../models");
const category = require("../models/category");
const sequelize = require("sequelize");
const NotificationService = require('../services/notificationCountService')

const getPostsWithStatus = (req, res) => {
  db.Post.findAll({
    attributes: [
      "id",
      "title",
      "content",
      "comment_id",
      "category_id",
      "user_id",
      "status_id",
      "createdAt",
      "updatedAt",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM PostHasUpvotes WHERE PostHasUpvotes.post_id = Post.id)"
        ),
        "upvoteCount",
      ],
    ],
    include: [
      {
        model: db.Status,
        attributes: ["id", "status"],
      },
      {
        model: db.Category,
        attributes: ["id", "category"],
      },
      {
        model: db.Comment,
        attributes: ["content"],
      },
    ],
  })
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getAllPostsByStatus = (req, res) => {
  const postStatus = req.params.postStatus;
  db.Post.findAll({
    attributes: [
      "id",
      "title",
      "content",
      "comment_id",
      "category_id",
      "user_id",
      "status_id",
      "createdAt",
      "updatedAt",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM PostHasUpvotes WHERE PostHasUpvotes.post_id = Post.id)"
        ),
        "upvoteCount",
      ],
    ],
    include: [
      {
        model: db.Status,
        where: { status: postStatus },
        attributes: ["status"],
      },
      {
        model: db.Comment,
        separate: true,
      },
      {
        model: db.Category,
        attributes: ["category"],
      },
    ],
  })
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const post = (req, res) => {
  const postId = req.params.id;

  db.Post.findByPk(postId, {
    where: { postId: postId },
    include: [
      {
        model: db.Comment,
        separate: true,
        include: [
          {
            model: db.Reply,
            separate: true,
            include: [
              {
                model: db.User,
                attributes: ["name", "email",],
              },
            ],
          },
          {
            model: db.User,
            attributes: ["name", "email"],
          },
        ],
      },
      {
        model: db.Status,
        attributes: ["status"],
      },
      {
        model: db.Category,
        attributes: ["category"],
      },
      {
        model: db.User,
        attributes: ["name", "email", "id"],

      },
    ],
  })
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const postIsUpvotedBy = (req, res) => {
  const postId = req.params.id;

  db.PostHasUpvote.findAll({
    where: {
      post_id: postId,
    },
    include: [
      {
        model: db.User,
        attributes: ["name", "avatarURL", "email"],
      },
    ],
  })
    .then((upvotes) => {
      const totalUpvotes = upvotes.length;

      res.json({
        upvotes: upvotes,
        totalUpvotes: totalUpvotes,
      });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const mergedPost = (req, res) => {
  const postId = req.params.id;

  db.MergedPost.findAll({
    where: {
      master_post: postId,
    },
    include: [
      {
        model: db.Post,
        attributes: ["Title", "Id"],
      },
    ],
  })
    .then((posts) => {
      const postContents = posts.map((post) => post.Post);

      res.json(postContents);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const createMerge = async (req, res) => {
  const postId = req.params.id;
  const parentId = req.params.parentId;

  try {
    const post = await db.Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.status_id = 5;

    await post.save();

    const createdPost = await db.MergedPost.create({
      master_post: parentId,
      child_post: postId,
    });

    res.json(createdPost);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createNewPost = async (req, res) => {
  try {
    const { title, content, user_id, category_id } = req.body;
    const files = req.files;
    const image = files.map((file) => file.originalname).join(", ");
    const externalEndpoint =
      "https://webdock.io/en/platform_data/feature_requests/new";

    const externalData = {
      userID: parseInt(user_id, 10),
      title: title,
      description: content,
      category: 1,
    };

    const response = await fetch(externalEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(externalData),
    });
    const responseData = await response.json();
    const newPostID = responseData.id;
    console.log(newPostID);
    const result = await db.Post.create({
      id: newPostID,
      status_id: 1,
      upvotes: 0,
      category_id,
      title,
      content,
      user_id: parseInt(user_id, 10),
      image: image,
    });


    console.log("External API Response:", responseData);
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

const deleteItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const itemToDelete = await db.Post.findByPk(itemId);

    if (itemToDelete) {
      await itemToDelete.destroy();
      return res.status(204).send(); // 204 No Content indicates successful deletion
    } else {
      return res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};










const changeStatus = async (req, res) => {
  try {
    const postId = req.params.id;
    const newStatus = req.params.status;
    const post = await db.Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.status_id = newStatus;

    await post.save();

    const postAuthor = await db.Post.findOne({
      where: {
        id: postId,
      },
    });

    await db.Notification.create({
      post_fk: postId,
      target_user_fk: postAuthor.user_id,
      action_user_fk: 22649,
      type_of_notification_fk: 3,
      notification_seen: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await NotificationService.checkAndRemoveOldestNotifications(postAuthor.user_id, 10);

    res.status(200).json({
      message: "Post status updated successfully",
      postId,
      newStatus,
    });
  } catch (error) {
    console.error("Error changing post status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




const upvotePost = async (req, res) => {
  const postId = req.params.id;
  const user = req.body;

  try {
    const post = await db.Post.findByPk(postId);

    const existingUpvote = await db.PostHasUpvote.findOne({
      where: {
        post_id: postId,
        user_id: user.id,
      },
    });

    const existingNotification = await db.Notification.findOne({
      where: {
        post_fk: postId,
        action_user_fk: user.id,
        type_of_notification_fk: 1
      },
    });

    const postAuthor = await db.Post.findOne({
      where: {
        id: postId,
      },
    });

    if (existingUpvote) {
      await existingUpvote.destroy(), existingNotification.destroy();
      return res.json({ success: true, message: "Upvote removed successfully!" });
    }

    const createdUpvote = await db.PostHasUpvote.create({
      post_id: postId,
      user_id: user.id,
    });

    const createdNotification = await db.Notification.create({
      post_fk: postId,
      target_user_fk: postAuthor.user_id,
      action_user_fk: user.id,
      type_of_notification_fk: 1,
      notification_seen: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    await NotificationService.checkAndRemoveOldestNotifications(user.id, 10);

    res.json({ success: true, message: "Upvote successful!", createdUpvote, createdNotification, postAuthor });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};











module.exports = {
  getPostsWithStatus,
  getAllPostsByStatus,
  postIsUpvotedBy,
  post,
  mergedPost,
  createMerge,
  createNewPost,
  changeStatus,
  deleteItemById,
  upvotePost,
};
