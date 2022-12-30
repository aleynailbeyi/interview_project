'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teams', [ {
			team_name: 'Backend Team',
      team_manager: 'Burak Yılmazer',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			team_name: 'Frontend Team',
      team_manager: 'Burak Yılmazer',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
