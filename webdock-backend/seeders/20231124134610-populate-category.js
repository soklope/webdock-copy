'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        category: 'Dashboard Features',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Documentation',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Billing Features',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Networking',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Hardware and Products',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Perfect Server Stacks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Mobile App',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Webdock API',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Competetion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Other',
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
