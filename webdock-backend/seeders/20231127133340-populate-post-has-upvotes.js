'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostHasUpvotes', [
      { user_id: 2200, post_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2201, post_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2202, post_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2203, post_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2204, post_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2205, post_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2206, post_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2207, post_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2208, post_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2209, post_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2210, post_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2200, post_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2201, post_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2202, post_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2203, post_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2204, post_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2205, post_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2206, post_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2207, post_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2208, post_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2209, post_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2210, post_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2200, post_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2201, post_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2202, post_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2203, post_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2204, post_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2205, post_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2206, post_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2207, post_id: 10, createdAt: new Date(), updatedAt: new Date() },
    
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
