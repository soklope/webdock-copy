'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MergedPosts', [
      {
        master_post: 1,
        child_post: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        master_post: 1,
        child_post: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        master_post: 1,
        child_post: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        master_post: 1,
        child_post: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        master_post: 1,
        child_post: 5,
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
