'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [
      {
        status: 'Review',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'Planned',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'In_Progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'Complete',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'Deprecated',
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

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
