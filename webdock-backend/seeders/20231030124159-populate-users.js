'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
        {
          id: 2200,
          name: 'Alice',
          email: 'alicej@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2201,
          name: 'Bob',
          email: 'bobsmith@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2202,
          name: 'Charlie',
          email: 'charlieb@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2203,
          name: 'David',
          email: 'davidl@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2204,
          name: 'Eva',
          email: 'evaw@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2205,
          name: 'Frank',
          email: 'frankg@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2206,
          name: 'Grace',
          email: 'graced@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2207,
          name: 'Henry',
          email: 'henryt@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2208,
          name: 'Isabella',
          email: 'isabellap@webdock.io',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2209,
          name: 'Jack',
          email: 'jacka@webdock.io',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2210,
          name: 'Mikkel',
          email: 'mikkel@edu.ucl.dk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22654,
          name: 'Alvi Møller',
          email: 'ahmo38299@edu.ucl.dk',
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
    await queryInterface.bulkUpdate('Users', null, {})
    
  // async down (queryInterface, Sequelize) {
  //   await queryInterface.bulkUpdate('Users', [
  //     {
  //       id: '1',
  //       firstname: 'ditte', 
  //       lastname: 'søren', 
  //       username: 'kaspersophia',
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //   }
  // ], {})


    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
