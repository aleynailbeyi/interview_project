'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [ {
			permission: 'Create Interview',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create User',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create Question',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create Team',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create Position',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
