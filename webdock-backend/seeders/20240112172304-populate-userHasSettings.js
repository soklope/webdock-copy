'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('userHasSettings', [
      {
        user_id: 22656,
        settings_id: 1,
        value: "dark",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 22656,
        settings_id: 2,
        value: "disabled",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
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
