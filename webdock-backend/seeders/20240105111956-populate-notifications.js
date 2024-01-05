'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notifications', [
      {
        id: 1,
        post_fk: 21,
        target_user_fk: 22649,
        action_user_fk: 2200,
        type_of_notification_fk: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        post_fk: 21,
        target_user_fk: 22649,
        action_user_fk: 2201,
        type_of_notification_fk: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        post_fk: 21,
        target_user_fk: 22649,
        action_user_fk: 2203,
        type_of_notification_fk: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
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
