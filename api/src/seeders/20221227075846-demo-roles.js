'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [ {
			role: 'Admin',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			role: 'Team Lead',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			role: 'Applicant',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
