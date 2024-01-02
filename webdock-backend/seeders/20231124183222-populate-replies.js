'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Replies', [
      {
        content: 'Reply - What the actual fuck, am i even looking at here?',
        user_id: 2200,
        like_id: 3,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Great post!',
        user_id: 2209,
        like_id: 2,
        comment_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - I totally agree!',
        user_id: 2209,
        like_id: 4,
        comment_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Interesting discussion!',
        user_id: 2200,
        like_id: 1,
        comment_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Nice insights!',
        user_id: 2200,
        like_id: 5,
        comment_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - I learned something new!',
        user_id: 2200,
        like_id: 3,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Thanks for sharing!',
        user_id: 2200,
        like_id: 2,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - I have a different perspective.',
        user_id: 2200,
        like_id: 4,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Well written!',
        user_id: 2200,
        like_id: 1,
        comment_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Interesting point of view!',
        user_id: 2200,
        like_id: 5,
        comment_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - I disagree with this.',
        user_id: 2200,
        like_id: 3,
        comment_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Can you elaborate?',
        user_id: 2200,
        like_id: 4,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - This helped me a lot!',
        user_id: 2200,
        like_id: 2,
        comment_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - I have a similar experience.',
        user_id: 2200,
        like_id: 1,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Interesting topic!',
        user_id: 2200,
        like_id: 5,
        comment_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - I wish more people knew about this.',
        user_id: 2200,
        like_id: 4,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Looking forward to more discussions!',
        user_id: 2200,
        like_id: 2,
        comment_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Great insights!',
        user_id: 2200,
        like_id: 3,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - I agree with your points.',
        user_id: 2200,
        like_id: 1,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - This made me think!',
        user_id: 2200,
        like_id: 4,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply - Well done!',
        user_id: 2200,
        like_id: 5,
        comment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
