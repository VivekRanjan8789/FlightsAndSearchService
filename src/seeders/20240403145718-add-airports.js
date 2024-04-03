'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('Airports',[
        {
          name: 'Kempegowda International Airport',
          cityId: '10',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mangaluru International Airport',
          cityId: '10',
          createdAt: new Date(),
          updatedAt: new Date()
       },

       {
          name: 'Mysuru Airport',
          cityId: '10',
          createdAt: new Date(),
          updatedAt: new Date()
        },
       {
          name: 'Kalaburagi Airport',
          cityId: '10',
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
          name: 'Indira Gandhi International Airport',
          cityId: '19',
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
          name: 'Delhi airport',
          cityId: '19',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],{});
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
