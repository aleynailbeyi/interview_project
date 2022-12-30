'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Positions', [ {
			position_name: 'Backend Developer',
      team_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			position_name: 'Frontend Developer',
      team_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Positions', null, {});
  }
};
