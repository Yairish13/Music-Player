'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
      "id":1,
      "name":"Yair",
      "email":"yair@gmail.com",
      "password":"123456789",
      "is_admin":0,
      "preferences":null,
      "remember_token":0
      },
      {
      "id":2,
      "name":"Ohad",
      "email":"Ohad@gmail.com",
      "password":"9876543321",
      "is_admin":0,
      "preferences":null,
      "remember_token":1
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
