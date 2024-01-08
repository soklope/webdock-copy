'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Type_of_notifications', [
      {
        id: 1,
        notification_type: "upvote",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        notification_type: "comment",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
