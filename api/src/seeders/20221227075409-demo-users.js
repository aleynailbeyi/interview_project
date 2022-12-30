'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [ {
			firstName: 'Aleyna',
			lastName: 'İlbeyi',
			email: 'a@gmail.com',
			password: 'char',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			firstName: 'Burak',
			lastName: 'Yılmazer',
			email: 'burakyilmazer@gmail.com',
			password: '988232',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			firstName: 'Alperen',
			lastName: 'Taşkın',
			email: 'alperentaskin@gmail.com',
			password: '1367454',
			createdAt: new Date(),
			updatedAt: new Date()
		},], {});
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
